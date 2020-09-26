const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    'components': resolve('src/components'),
    'pages': resolve('src/pages'),
    'styles': resolve('src/styles'),
    'util': resolve('src/util'),
    'api': resolve('src/api'),
    'routers': resolve('src/routers'),
    'store': resolve('src/store')
  };
  return config;
}