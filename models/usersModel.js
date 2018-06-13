const Conn = require("../helpers/mysqlconection");

class Viajes {
    getAll(cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios;";
        Conn.query(SQL,(error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }
    findUser(nombre, cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios WHERE nombre LIKE '%" + nombre +"%';";
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }
    fetchAll(cb){
        if(!Conn) return cb("No se ha creado la conexión");
        const SQL = "SELECT * FROM usuarios LIMIT 10;";
        Conn.query(SQL,(error,rows)=>{
            if(error) return cb(error);
            return cb(rows);
        });
    }
}

module.exports = Viajes;