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
        const SQL = "SELECT * FROM usuarios WHERE usuario LIKE '%" + nombre +"%';";
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }

    findEmail(correo, cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = "SELECT * FROM usuarios WHERE email LIKE '%" + correo +"%';";
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }

    fetchAll(cb)
    {
        if(!Conn) return cb("No se ha creado la conexión");
        const SQL = "SELECT * FROM usuarios LIMIT 10;";
        Conn.query(SQL,(error,rows)=>{
            if(error) return cb(error);
            return cb(rows);
        });
    }

    insertUser(nombreUser, emailUser, passwordUser, cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = `INSERT INTO usuarios (usuario, email, password) VALUES ('${nombreUser}','${emailUser}','${passwordUser}');`;
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }

    updatePass(newPasswordUser, cb)
    {
        if(!Conn) return cb("No se ha podido crear la conexión");
        const SQL = `UPDATE usuarios SET password = '${newPasswordUser}' WHERE usuarios.id = 1`;
        Conn.query(SQL, (error, rows)=>{
            if(error) return cb(error);
            else return cb(rows);
        })
    }
}

module.exports = Viajes;