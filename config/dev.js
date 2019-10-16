module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer:{
      proxy:{
        "/api":{
          target:"https://alleyzyh.natappvip.cc",
          changeOrigin:true,
          pathRewrite:{
            "^/api":""
          }
        }
      }
    }
  }
}
