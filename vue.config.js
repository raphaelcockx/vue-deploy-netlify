// Just changing some stuff here, OK?

module.exports = {
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      args[0][0].ignore = ['.DS_Store']
      return args
    })
  }
}
