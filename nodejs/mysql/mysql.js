let mysql = require('mysql')

var db1 = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'aurwedding'
}

var pool = mysql.createPool(db1);

function query (sql, data) {
  return new Promise(function(resolve, reject) {
      pool.getConnection(function(err,connection) {
          console.log(err)
          console.log('err')
          console.log(connection)
          if (err) {
              reject(err)
          } else {
              connection.query(sql, data, function (error, results, fields) {
                  if (error) {
                      reject(err)
                  } else {
                      resolve(results)
                  }
                  connection.release()
              })
          }
      })
  })
}

module.exports = query
