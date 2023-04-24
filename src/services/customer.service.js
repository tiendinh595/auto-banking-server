const Customer = require("../models/customer.model");

module.exports.newCustomer = async (data) => {
    const customer = new Customer(data);
    return await customer.save();
}