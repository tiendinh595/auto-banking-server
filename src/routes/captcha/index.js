'use strict'
const controller = require('../../controllers/captcha.controller')

module.exports = async function (fastify, opts) {
    fastify.post('/', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    bank: { type: 'string', enum: ['vietcombank', 'vietinbank', 'mbbank', 'agribank'] },
                    image_base64: { type: 'string' },
                    license_key: { type: 'string' }
                },
                required: ['bank', 'image_base64', 'license_key']
            },
        },
        // preValidation: [fastify.authenticate]
        handler: controller.captchaSolver
    });
}
