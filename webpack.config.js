const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')

//const proxy = 'http://dev2.imoxiu.cn/~renzhenguo/hew/air/public/admin/'
//const proxy = 'http://10.0.0.26:10030'
const proxy = 'http://router.dev.imoxiu.cn/~renzhenguo/explore/imagehash/demo/public/index.php'
const rootPath = '../../public/admin/assets/'
const publicPath = 'assets/'
const port = process.argv[5] || 8080;

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, rootPath), //静态资源输出根路径
    filename: options.dev ? '[name].js' : 'js/[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath,
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100,
            name: 'res/[name].[ext]?[hash:7]',
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      filename: options.dev ? 'index.html' : resolve(__dirname, 'tpl/index.html'), //静态资源输出根路径
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  devServer: getDevServer(options),
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})

/**
 * dev-service 热更新配置
 */
function getDevServer (options) {
    return {
        host: '10.0.0.26',
        port: port,
        proxy: {
            '!/': {
                target: proxy,
                changeOrigin: true,
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    };
}
