function getStreet(street, callback){

    street.name = tratamento(street.name);
    street.district = tratamento(street.district);

    var sql = getSQL(street);

    var conn = app.helpers.database.connPostgres;
    var crudDB = new app.helpers.database.crud(conn); 
    
    crudDB.defalut(sql, function(err, resposta){
        if(err){
            console.log('SQL error: ' + err);
            callback(500);
            return false;
        }else{
            if(resposta.rowCount > 1) callback({error: 'More than one result'}, {result: resposta.rows})
            else if(resposta.rowCount > 0) callback(null,[resposta.rows, street.number]);
            else callback({'error': 'street not find'}, {result: street});
        }
    });
}

function tratamento(string){
    if(string.indexOf(".") > -1) {
        return string.replace(".", "").toLowerCase();
    }else{
        return string;
    }
}

function getSQL(street){
    var res = "SELECT *, ST_astext(geom) as geometry FROM tb_ruas INNER JOIN tb_trechos ON tb_ruas.id=tb_trechos.id_rua WHERE ";
    
    var names = street.name.split(" ");
    for(var i in names) res+="LOWER(nome) LIKE '%"+names[i]+"%' AND ";

    var districts = street.district.split(" ");
    for(var i in districts) res+="LOWER(bairro) LIKE '%"+districts[i]+"%' AND ";

    if(street.number%2==0) res+= street.number+" BETWEEN nfpar AND nlpar AND ";
    else res+= street.number+" BETWEEN nfimpar AND nlimpar AND ";

    res+= street.year+" BETWEEN anoI AND anoF";
    return res;
}

module.exports = function(){
    return getStreet;
}