const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    admin: ['./admin/app/app.module.js'],
    index: ['./index/app/app.module.js']
  },
  output: {
    path: path.resolve(__dirname, '.dist'),
    publicPath: NODE_ENV === 'development' ? __dirname + '/' : undefined,
    filename: path.join('[name].bundle.js'),
    library: '[name]'
  },

  watch: NODE_ENV === 'production',

  devtool: NODE_ENV === 'production' ? 'eval' : false,

  devServer: {
    open: true
  },


  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(png|jpg|jpeg|mp4|ovg|webm|svg|ttf|eot|woff|woff2)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            name: '[path][name].[ext]',
            limit: '100000'
          }
        }]
      },
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  performance: {
    hints: NODE_ENV === 'production' ? "warning" : false
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index/dev.html'),
      filename: path.resolve(__dirname, 'index.html'),
      inject: 'body',
      alwaysWriteToDisk: true,
      hash: NODE_ENV === 'production',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'admin/dev.html'),
      filename: path.resolve(__dirname, 'admin/index.html'),
      inject: 'body',
      alwaysWriteToDisk: true,
      hash: NODE_ENV === 'production',
      chunks: ['admin']
    }),
    function() {
      this.plugin('watch-run', function(watching, callback) {
        console.log('Begin compile at ' + new Date());
        callback();
      })
    },
    new HtmlWebpackHarddiskPlugin()
  ]
};

if (NODE_ENV === 'production') {
  console.log('NODE_ENV = production');

  module.exports.module.rules.push({
    test: /\.scss/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: NODE_ENV !== 'production'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version']
            })
          ],
          sourceMap: true
        }
      }]
    })
  });

  module.exports.module.rules.push({
    test: /\.css/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options: {
          sourceMap: NODE_ENV !== 'production'
        }
      }]
    })
  });
  module.exports.plugins.unshift(
    new ExtractTextPlugin('[name].css')
  );
} else {
  console.log('NODE_ENV = development');

  module.exports.module.rules.push({
    test: /\.css/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }]
  });
  module.exports.module.rules.push({
    test: /\.scss/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: [
          autoprefixer({
            browsers: ['ie >= 8', 'last 4 version']
          })
        ],
        sourceMap: true
      }
    }]
  });
}
