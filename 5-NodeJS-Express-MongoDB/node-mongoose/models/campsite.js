const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SCHEMA
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// MODEL
const Campsite = mongoose.model('Campsite', campsiteSchema) // Instatiate documents

module.exports = Campsite;