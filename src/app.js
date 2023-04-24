'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
    fastify
        .register(require('./plugins/support'))
        .register(require('./plugins/sensible'))
        .register(require('./plugins/mongo'))

    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}
