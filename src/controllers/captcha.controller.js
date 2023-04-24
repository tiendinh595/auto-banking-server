const CaptchaService = require('../services/captcha.service');
const LicenseService = require("../services/license.service");

module.exports.captchaSolver = async (request, reply) => {
    try {
        const {bank, image_base64, license_key} = request.body;
        const license = await LicenseService.getLicenseByKey(license_key);
        if (!license) {
            reply.send({err: "license not found"});
            return;
        }
        if (license.license_status !== 'active') {
            reply.send({err: "license not active"});
            return;
        }

        let result = await CaptchaService.captchaSolver(bank, image_base64)
        reply.send(result.data);
    } catch (e) {
        reply.send({err: e.message});
    }
}