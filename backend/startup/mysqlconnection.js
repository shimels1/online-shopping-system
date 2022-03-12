const sql = require('mysql2');
const con = sql.createPool({
    host: "127.0.0.1",
    user: "root",
    database: "ds",
    password: "password",
    port: "3307"

}).promise();
module.exports = con;