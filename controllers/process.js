module.exports = function(app){

    app.get('/geocodifica', function(req, res){
        res.send('hello world');
    });

    app.post('/geocodifica/street', function(req, res){
        var infosRua = req.body;

        //infosRua.date = new Date;

        var conn = app.helpers.database.connPostgres;
        
        var query = conn.query("SELECT * FROM tb_data");
        query.on("row", function (row, result) {
            result.addRow(row);
        });
        query.on("end", function (result) {
            res.json(result.rows);
            conn.end();
        });

    });

}
