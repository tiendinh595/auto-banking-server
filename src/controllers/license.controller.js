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
    let data = {};
    if (license_check) {
        data = {
            result: ip + '|' + version + '|' + license_key,
            permissions: license_check.permissions ?? {}
        }
    } else {
        data = {
            result: 'invalid',
            permissions: {}
        }
    }
    data = JSON.stringify(data)
    let data_encrypted = encryptData(data)
    reply.send({d: data_encrypted})
}

module.exports.create = async (request, reply) => {
    let {customer, ip, version, permissions, backend_url, frontend_url} = request.body
    let data = {
        customer: customer,
        ip: ip,
        version: version,
        backend_url: backend_url,
        frontend_url: frontend_url,
        license_key: generateLicenseKey(),
        license_type: 'on-premise',
        license_status: 'active'
    }
    if (permissions) {
        data.permissions = permissions
    }

    let license = await LicenseService.create(data)
    reply.send(license)
}
