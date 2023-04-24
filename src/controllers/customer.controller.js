const CustomerService = require('../services/customer.service');

module.exports.newCustomer = async (request, reply) => {
    let customer = await CustomerService.newCustomer(request.body)
    reply.send(customer)
}