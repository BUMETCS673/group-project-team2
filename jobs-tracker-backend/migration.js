var mysql = require('mysql');
var migration = require('mysql-migrations');
const config = require("./app/config/db.config.js");

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : config.HOST,
  user     : config.USER,
  password : config.PASSWORD,
  database : config.DB
});

migration.init(connection, __dirname + '/migrations');