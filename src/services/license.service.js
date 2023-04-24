const License = require('../models/license.model');

module.exports.create = async (data) => {
    const license = new License(data);
    return await license.save();
}

module.exports.checkLicense = async (ip, version, license_key) => {
    return License.findOne({ip, version, license_key, license_status: 'active'})
}