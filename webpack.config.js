/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const {
  port = 3000,
  backend
} = require('./config/webpack.js')
const { NODE_ENV = 'development' } = process.env

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  mode: NODE_ENV,
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  devServer: {
    hot: true,
    compress: true,
    contentBase: './dist/',
    port: port,
    proxy: [{
      context: ['/api', '/socket'],
      target: backend,
      ws: true
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: NODE_ENV !== 'production' }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
        }
      ]
    }, {
      test: /\.(tsx?|jsx?)$/,
      exclude: /node_modules|dist/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: '>0.5%, last 2 versions, not dead'
            }],
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    }, {
      test: /\.(?:png|jpe?g|gif|svg|ico)$/,
      loader: 'file-loader',
      options: {
        name: 'media/[name].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ].concat(NODE_ENV === 'development' ? [new HardSourceWebpackPlugin()] : []),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
