module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn"
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: { "zlib": false, "path": false, "stream": false, "fs": false ,"async_hooks":false }
    }
  }
}

