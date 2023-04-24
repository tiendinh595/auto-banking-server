const LicenseService = require('../services/license.service')
const {generateLicenseKey, decryptData, encryptData} = require("../utils/common");

module.exports.CheckLicense = async (request, reply) => {
    let data_decrypted = decryptData(request.body.encrypted)
    let license = data_decrypted.split('|')
    let ip = license[0]
    let version = license[1]
    let license_key = license[2]
    let license_check = await LicenseService.checkLicense(ip, version, license_key)
    console.log('license', license)
    console.log('license_check', license_check)
    let data_encrypted = ''
    if (license_check) {
        data_encrypted = encryptData(ip + '|' + version + '|' + license_key)
    } else {
        data_encrypted = encryptData('invalid')
    }
    reply.send({d: data_encrypted})
}

module.exports.create = async (request, reply) => {
    let {customer, ip, version} = request.body
    let data = {
        customer: customer,
        ip: ip,
        version: version,
        license_key: generateLicenseKey(),
        license_type: 'unlimited',
        license_status: 'active'
    }

    let license = await LicenseService.create(data)
    reply.send(license)
}