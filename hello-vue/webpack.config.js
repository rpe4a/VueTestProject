var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    app: ["babel-polyfill", './src/main.js'],
    vendor: ['vue', 'vue-router', 'axios', 'lodash', 'bootstrap-sass', 'moment', 'validator']
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
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]' //?[hash]'
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$|\.woff2(\?v=\d+\.\d+\.\d+)?$|\.ttf(\?v=\d+\.\d+\.\d+)?$|\.otf(\?v=\d+\.\d+\.\d+)?$|\.eot(\?v=\d+\.\d+\.\d+)?$|\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]' //?[hash]'
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

if (process.env.NODE_ENV === 'development') {
  module.exports.module.rules.push({
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      },
      {
        loader: "sass-loader" // compiles Sass to CSS
      }
    ]
  })
  module.exports.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        // the "scss" and "sass" values for the lang attribute to the right configs here.
        // other preprocessors should work out of the box, no loader config like this necessary.
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        /*'js': 'babel-loader!eslint-loader'*/
      },
    }
  })
}



if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.output.publicPath = '',
  module.exports.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [{
        loader: "css-loader", // translates CSS into CommonJS
        options: {
          sourceMap: true,
          minimize: true,
          discardComments: {
            removeAll: true
          }
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')({
                browsers: ['last 3 versions']
              })
            ]
          }
        }
      }, {
        loader: 'resolve-url-loader'
      }, {
        loader: "sass-loader", // compiles Sass to CSS
        options: {
          sourceMap: true
        }
      }]
    })
  })

  module.exports.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        scss: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'vue-style-loader'
        }),
        sass: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader?indentedSyntax',
          fallback: 'vue-style-loader'
        })
      },
      // other vue-loader options go here
      preserveWhitespace: false,
      postcss: [
        require('autoprefixer')({
          browsers: ['last 3 versions']
        })
      ]
    }
  })

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
    }),
    new ExtractTextPlugin("style.css"),
    /*    new webpack.optimize.OccurenceOrderPlugin()*/

  ])
}