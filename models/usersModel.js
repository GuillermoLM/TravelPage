const Conn = require("../helpers/mysqlconection");

class viajes {
    fetchAll(cb){
        if(!Conn) return cb("No se ha creado la conexión");
        const SQL = "SELECT * FROM usuarios LIMIT 10;";
        Conn.query(SQL,(error,rows)=>{
            if(error) return cb(error);
            return cb(rows);
        });
    }
}

module.exports = viajes;