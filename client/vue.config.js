const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";
const path = require('path');


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/client/'
  : '/',
  
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'DMS',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  outputDir: path.resolve(__dirname, '../Server/public'),
  devServer: {
    proxy: {
      '/patients': {
        target: 'http://localhost:3000'
      }
    }
  }
};
