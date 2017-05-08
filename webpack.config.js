var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vuxLoader = require('vux-loader')

const webpackConfig =  {
  entry: {
    vendor:['vue','vuex','vue-router'],
    home: path.join(__dirname, './src/main.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'js/[name].build.js',
    chunkFilename: 'js/[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: ExtractTextPlugin.extract({fallback: 'vue-style-loader', use: 'css-loader!less-loader'}),
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.style$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity //Infinity
    }),
    new ExtractTextPlugin({
      filename:  (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: "享",
      template: path.join(__dirname,'./src/views/index.html'),
      inject: true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  watch: true
}

module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [
    {
    name: 'vux-ui'
    },
    {
      name: 'script-parser',
      fn: function (source) {
        return source.replace('VARIABLE', 'v2')
      }
    },
    {
      name: 'style-parser',
      fn: function (source) {
        return source.replace('black', 'white')
      }
    },
    {
      name: 'js-parser',
      fn: function (source) {
        return source.replace('black', 'white')
      }
    }
  ]
})

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
