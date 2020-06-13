const { resolve } = require('path')

module.exports = {
  lintOnSave: 'warning',
  chainWebpack: (config) => {
    config.resolve.alias.set('css', resolve(__dirname, 'src/assets/css'))
      .set('views', resolve(__dirname, 'src/views'))
  },
  devServer: {
  // 1.在接口里用*解决跨域 ==> app.all('*', function(req, res, next){res.header('Access-Control-Allow-Origin', '*')next()})
  // 2.代理 使用代理解决跨域
  // 3.使用axios 的jsonp插件解决跨域
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3000/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
