module.exports = webpackConfig => {
  const config = Object.create(webpackConfig)
  config.resolve = {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias: {
      '@': `${__dirname}/src/`
    }
  }
  return config
}