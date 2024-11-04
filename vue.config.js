module.exports = {
  outputDir: 'dist',
  pages: {
    popup: {
      entry: 'src/popup/main.js',
      template: 'public/popup.html',
      filename: 'popup.html'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
