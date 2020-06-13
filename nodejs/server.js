const express = require('express')

let router = require('./controller/router')
let multer = require('multer')
let path = require('path')
let app = express()

var storage = multer.diskStorage({
  destination: function(req, flie, cd) {
    cd(null, __dirname + '/uploader')
  },
  filename: function(req, file, cd) {
    cd(null, file.filename + '_' + Date.now())
  }
})

var uploadMulter = multer({storage: storage})

app.post('/upload', uploadMulter, router.upload)
  .get('/upload',router.upload)


app.listen(3000);