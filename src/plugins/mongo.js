const fp = require('fastify-plugin')
const mongoose = require("mongoose");
const config = require('../config');

module.exports = fp(async function (fastify, opts, done) {
    console.log('mongoose plugin loaded')
    mongoose.connect(config.mongoose.url, config.mongoose.options)
        .then(() => {
            console.log('MongoDB connected')
            done()
        })
        .catch(err => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ', err);
            done(err)
        })
});