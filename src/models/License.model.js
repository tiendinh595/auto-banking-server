const mongoose = require('mongoose');

const licenseSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    license_key: {
        type: String,
        required: true
    },
    license_type: {
        type: String,
        required: true,
        enum: ['trial', 'paid', 'free', 'unlimited']
    },
    license_status: {
        type: String,
        enum: ['active', 'inactive', 'expired', 'locked'],
    },
    license_start: {
        type: Date,
        required: false
    },
    license_end: {
        type: Date,
        required: false
    },
    version: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    }
}, {
    index: {unique: true, fields: [{bank_name: 1}, {account_number: 1}]},
    toJSON: {virtuals: true}, toObject: {virtuals: true},
    timestamps: {
        createdAt: 'created_at', updatedAt: 'updated_at'
    },
});
const License = mongoose.model('License', licenseSchema);
module.exports = License;
