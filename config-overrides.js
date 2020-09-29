const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  webpack : function override(config, env) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('src'),
      'components': resolve('src/components'),
      'view': resolve('src/view'),
      'style': resolve('src/style'),
      'util': resolve('src/util'),
      'api': resolve('src/api'),
      'store': resolve('src/store'),
      'request': resolve('src/request'),
      'business': resolve('src/business')
    };
    return config;
  }
}
