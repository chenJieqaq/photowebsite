const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'static',
  // publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    // vue自己启动的端口
    port: 8121

  }

})
