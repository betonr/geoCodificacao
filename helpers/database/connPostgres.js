var pg = require('pg');

function connectionsDB(){
    var conn = new pg.Client("pg://postgres:root@localhost:5432/db_geocod");
    conn.connect();

    return conn;
}

module.exports = function(){
    return connectionsDB();
}