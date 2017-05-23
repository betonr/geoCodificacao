var pg = require('pg');

function connectionsDB(){
    var conn = new pg.Client("pg://postgres:root@localhost:5432/db_geocod");
    conn.connect(function(err){
        if(err) {
            console.err('Erro ao se conectar com o servidor'); 
            throw err;
        }
    });

    return conn;
}

module.exports = function(){
    return connectionsDB();
}