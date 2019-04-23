const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: './docs/'

}