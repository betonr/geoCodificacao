var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    validator = require('express-validator');

module.exports = function(){
    app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(validator());

    consign()
     .include('controllers')
     .then('helpers')
     .then('externalApi')
     .into(app);

    return app;
}