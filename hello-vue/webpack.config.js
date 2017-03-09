var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
      app: ["babel-polyfill", './src/main.js'],
      vendor: ['vue', 'axios', 'lodash', 'bootstrap-sass']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js' //[chunkhash]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['', ".scss", ".js"],
    alias: {
      'bootstrap-sass$': "bootstrap-sass/assets/stylesheets/bootstrap",
      'bootstrap-js$': "bootstrap-sass/assets/javascripts/bootstrap",
      'font-awesome$': 'font-awesome/sccs/font-awesome',
    }
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /.vue$|.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$|\.woff2(\?v=\d+\.\d+\.\d+)?$|\.ttf(\?v=\d+\.\d+\.\d+)?$|\.otf(\?v=\d+\.\d+\.\d+)?$|\.eot(\?v=\d+\.\d+\.\d+)?$|\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      '': "jquery",
      "jQuery": "jquery",
      'window.jQuery': "jquery",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),

  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

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