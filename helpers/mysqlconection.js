const MYSQL = require("mysql");
const CONN = MYSQL.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"viajes"
})
module.exports = CONN;