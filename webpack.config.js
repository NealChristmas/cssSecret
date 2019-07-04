const path=require('path');
const webpack=require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const development=
module.exports={
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js",
    // 表示在引入静态资源时，从根路径开始引入
	  publicPath: '/'
  },
  devtool: '#eval-source-map',
  module:{
    //webpack默认只能解析js文件，因此需要在webpack.config.js中配置相应的解析器。
    // css-loader用来解析css文件，
    // style-loader用来解析dom中通过<style></style>注入的样式，
    // 而vue-style-loader是vue官方基于style-loader开发的适用于vue的样式解析，
    // sass-loader用来解析sass/scss文件
    // 同样webpack人无法解析图片格式的文件，需要把图片当做模块使用file-loader解析。
    //babel7与babel6不能混用，babel7由@标识，安装过程查询官网
    //vue loader解析vue单文件，每次升级vue都要升级vue-loader ，安装过程查询官网

    rules:[
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {test:/\.css$/,  use:["vue-style-loader","css-loader"]},
      {test:/\.scss$/,use:["vue-style-loader","css-loader","sass-loader"]},
      {test: /\.sass$/,use: ['vue-style-loader','css-loader','sass-loader?indentedSyntax']},
      //一个匹配规则中可以配置使用多个 loader,loader顺序是从后向前依次打包，
      {test: /\.vue$/,loader: 'vue-loader',options: {
        loaders: {'scss': ['vue-style-loader','css-loader','sass-loader'],'sass': ['vue-style-loader','css-loader','sass-loader?indentedSyntax']}
      }
}
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
    //这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。

  ],
  mode:"development",
  devServer:{
    contentBase:path.resolve(__dirname),
    port:8090,
    hot:true,
    inline:true,
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
    	index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    },

  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.esm.js",
      "@":path.resolve(__dirname,"src")
    },
    extensions:[".js",".vue",".json"]
  }
}
