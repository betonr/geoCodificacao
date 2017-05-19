var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();


app.use(bodyParser());
var port = process.env.PORT || 3000;

//ROTAS
var router = express.Router();

router.get('/', require('routers/index').index);
router.post('/', require('routers/process').process);

//pagina de não encontrada


app.use('/composer', router);

//subindo o servidor na porta 3000
app.listen(port, function(){
    console.log('Servidor rodando na porta: '+port);
});

