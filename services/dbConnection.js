const mysql = require('mysql');

const dbConnection = 
     mysql.createConnection({
      host: process.env.MYSQLDB_SERVER,
      user: process.env.MYSQLDB_USER,
      password: process.env.MYSQLDB_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });

  dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  module.exports = dbConnection;





