module.exports = function(app){

    app.get('/geocodifica', function(req, res){
        res.send('hello world');
    });

    app.post('/geocodifica/street', function(req, res){
        var ruas = req.body;

        //validação dos dados

        var resTest = function(callback){
            var plus = [];
            var not = [];
            var correctly = [];
            for(var key in ruas){
                new app.helpers.getStreet(ruas[key], function(err, resultado){

                    if(err && err=='street not find') not.push(resultado);
                    else if(err) plus.push(resultado);
                    else {
                        new app.helpers.getPoint(resultado, function(coordinates){
                            if(coordinates) correctly.push(coordinates);
                        }); 
                    }
                
                });
            }
            callback(not, plus, correctly);
        }

        resTest(function(not, plus, correctly){
            console.log(correctly);
            console.log(not);
        });

    });

}
