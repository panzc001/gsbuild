const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 8090,
    },
    productionSourceMap: false
}