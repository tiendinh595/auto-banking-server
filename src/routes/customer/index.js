'use strict'
const controller = require('../../controllers/customer.controller')
module.exports = async function (fastify, opts) {
    fastify.post('/', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    phone: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                }
            }
        },
        // preValidation: [fastify.authenticate]
        handler: controller.newCustomer
    })
}
