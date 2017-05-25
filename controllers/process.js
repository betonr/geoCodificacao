module.exports = function(app){

    app.get('/geocodifica', function(req, res){
        res.send('hello world');
    });

    app.post('/geocodifica/street', function(req, res){
        var ruas = req.body;

        new app.helpers.getResult(ruas, function(correctly, not, plus){
            console.log(correctly);
            console.log(not);
            console.log(plus);
        });

    });

}
