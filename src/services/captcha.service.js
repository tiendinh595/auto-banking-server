const axios = require("axios");

module.exports.captchaSolver = async (bank, image_base64) => {
    return axios.post(`https://captcha.autobanking.online/captcha/${bank}`, {image_base64});
}
