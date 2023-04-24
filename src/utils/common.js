const crypto = require("crypto");
const config = require('../config');

const oneRandomKey = function () {
    return Math.random()
        .toString(36)
        .toUpperCase()
        .slice(2)
        .replace(/[01IO]/g, '')
}

const randomKeyOfSpecificLength = function (len) {
    let str = oneRandomKey()
    while (str.length < len) {
        str += oneRandomKey()
    }
    return str.slice(0, len)
}

exports.generateLicenseKey = function (length = 16, separator = '-', blockLength = 4) {
    const license = randomKeyOfSpecificLength(length)
    const regexp = new RegExp(`(\\w{${blockLength}})`, 'g')
    return license.replace(regexp, `$1${separator}`).substr(0, (length + Math.round(length / blockLength)) - 1)
}

module.exports.decryptData = (data) => {
    return crypto.privateDecrypt(config.private_key, Buffer.from(data, 'hex')).toString('utf8');
}

module.exports.encryptData = (data) => {
    return crypto.publicEncrypt(config.public_key_client, Buffer.from(data, 'utf8')).toString('hex');
}