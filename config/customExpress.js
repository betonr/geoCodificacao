var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser');

module.exports = function(){
    app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
     .include('controllers')
     .then('helpers')
     .into(app);

    return app;
}