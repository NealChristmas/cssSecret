const path=require('path');
const webpack=require('webpack');

module.exports={
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  module:{
    //webpack默认只能解析js文件，因此需要在webpack.config.js中配置相应的解析器。
    // css-loader用来解析css文件，
    // style-loader用来解析dom中通过<style></style>注入的样式，
    // 而vue-style-loader是vue官方基于style-loader开发的适用于vue的样式解析，
    // sass-loader用来解析sass/scss文件
    // 同样webpack人无法解析图片格式的文件，需要把图片当做模块使用file-loader解析。
    rules:[{
      test:/\.css$/,
      use:[
        "vue-style-loader",
        "css-loader"//解析css文件
      ]
    },{
      test:/\.scss$/,
      use:[
        "vue-style-loader",
        "css-loader",
        "sass-loader"
      ]
    },{
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
    }]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  mode:"development",
  devServer:{
    contentBase:path.resolve(__dirname),
    port:8090,
    hot:true,
    inline:true
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.esm.js",
      "@":path.resolve(__dirname,"src")
    },
    extensions:[".js",".vue",".json"]
  }
}
