const mysql = require('mysql');
const SQL_QUERY = require('../../constants/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'mysql',
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
  });
  const query = SQL_QUERY.CHECK_COUNT;

connection.query(query, (err, result) => {
  if (err) {
        connection.query(SQL_QUERY.CHECK_AND_CREATE_LOGS_TABLE, (err, result) => {
            if (err) throw err;
            console.log('Table created');
            connection.query(SQL_QUERY.FULL_TEXT_SEARCH, (err, result) => {
                console.log('Full text search created');
            });
        });
  }
  console.log("looks good");
});  
  module.exports = connection;