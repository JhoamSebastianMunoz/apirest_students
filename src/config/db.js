const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password:"",//contraseña
    database:"mi_api_rest"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;