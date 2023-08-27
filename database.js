const mysql =require("mysql2");
const dbConnection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "nodejs_login"
}).promise()

module.exports = dbConnection;