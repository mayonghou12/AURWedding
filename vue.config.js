const { resolve } = require('path')

module.exports = {
  lintOnSave: 'warning',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve(__dirname, 'src'))
      .set('css', resolve(__dirname, 'src/assets/css'))
      .set('views', resolve(__dirname, 'src/views'))
      .set('pub', resolve(__dirname, 'src/assets/public'))
      .set('common', resolve(__dirname, 'src/components/common'))
      .set("comp", resolve(__dirname, "src/components"))
  },
  devServer: {
  // 1.在接口里用*解决跨域 ==> app.all('*', function(req, res, next){res.header('Access-Control-Allow-Origin', '*')next()})
  // 2.代理 使用代理解决跨域
  // 3.使用axios 的jsonp插件解决跨域
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://192.168.85.211:3000/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
