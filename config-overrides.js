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
      'style': resolve('src/style'),
      'view': resolve('src/view'),
      'service': resolve('src/service'),
      'business': resolve('src/business'),
      'util': resolve('src/util'),
      'store': resolve('src/store')  
    };
    return config;
  }
}
