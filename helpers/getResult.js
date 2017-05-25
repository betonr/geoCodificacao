function getResult(ruas, callback){

    var correctly = [], 
        not = [], 
        plus = [];

    for(var key in ruas){
        new app.helpers.getStreet(ruas[key], function(err, resultado){
            if(err && err=='More than one result') plus.push(resultado); 
            else if(err) not.push(resultado);
            else {
                new app.helpers.getPoint(resultado, function(coordinates){
                    if(coordinates) correctly.push(coordinates);
                }); 
            }
        });
    } 
    
    callback(correctly, not, plus); 

}


module.exports = function(){
    return getResult;
}