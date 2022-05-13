const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'solati_db'
});
 
connection.connect();

module.exports = connection;