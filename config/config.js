require('dotenv').config();


const dbConfig = {
    host: process.env.MYSQLDB_SERVER,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }


const apiSecretKey = process.env.SECRET_KEY;
const listPerPage = 10;
module.exports = {dbConfig, apiSecretKey,listPerPage};