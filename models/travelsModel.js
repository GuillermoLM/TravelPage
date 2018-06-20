const Conn = require("../helpers/mysqlconection");

class Travels 
{
    showTravels(cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM travels;";
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }
}

module.exports = Travels;