function crud(connection){
    this._connection = connection;
}

crud.prototype.defalut = function(sql, callback){
    this._connection.query(sql, callback);
}

crud.prototype.read = function(table, sql, parses, callback){
    this._connection.query("SELECT * FROM "+table+" WHERE "+sql, parses, callback);
}

module.exports = function(){
    return crud;
};
