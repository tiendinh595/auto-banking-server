'use strict'
const controller = require('../../controllers/license.controller')
module.exports = async function (fastify, opts) {
    fastify.post('/', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    customer: {type: 'string'},
                    ip: {type: 'string'},
                    version: {type: 'string'},
                }
            }
        },
        handler: controller.create
    })
    fastify.post('/check', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    encrypted: {type: 'string'},
                }
            }
        },
        handler: controller.CheckLicense
    })
}
