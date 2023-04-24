const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    note: {
        type: String,
        required: false
    }
}, {
    index: {unique: true, fields: [{bank_name: 1}, {account_number: 1}]},
    toJSON: {virtuals: true}, toObject: {virtuals: true},
    timestamps: {
        createdAt: 'created_at', updatedAt: 'updated_at'
    },
});
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;