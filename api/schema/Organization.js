const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// orginization schema
let OrginizationSchema = new Schema({
    organization_name: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: [true, "can't be blank"],

    },
    organization_description: {
        type: String,
        required: [true, "can't be blank"]
    },

    status: {
        type: String,
        trim: true,

    },
    created_by: {
        type: String,
        trim: true,
        // required: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    logo: {
        type: String,
        default: ''
    },
    max_size: {
        type: String,
        default: 1
    },
    currency: {
        type: String,
        enum: ['EUR','USD','PHP','AED','HKD'],
        default: 'USD'
    },
    price: {
        type: Number,
        default: null
    },
    auto: {
        type: String,
        enum: ['Yes', 'No']
    }
}, {
    collection: 'Orginization'
});

module.exports = mongoose.model('Orginization', OrginizationSchema);