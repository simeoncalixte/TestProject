import mysql  from 'mysql';

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  port: '8889',
  database : 'todo'
});
 
connection.connect();
 
connection.query(' SELECT * FROM user WHERE username="simeoncalixte" ',
 function (error, results, fields) {
  if (error) throw error;
  console.log({results,error,fields})
});
 
connection.end();