const query = require('./mysql')

function img () {
  var sql = 'select * from img'
  query(sql).then(function (result) {

    console.log(result)
  })
}

module.exports = {
  img
}