module.exports = function(app){

    app.get('/geocodifica', function(req, res){
        res.send('hello world');
    });

    app.post('/geocodifica/street', function(req, res){
        var ruas = req.body;
        //validação dos dados

        for(var key in ruas){
            var arrayStreet = new app.helpers.getStreet(ruas[key]);
            
            var point = new app.helpers.getPoint(arrayStreet);
        }

    });

}
