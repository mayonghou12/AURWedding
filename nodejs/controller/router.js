let myimg = require('../mysql')
    
const upload = (req, res) => {
  myimg.img()
}

module.exports = {
  upload
}