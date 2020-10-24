const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
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
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

// MODEL
const Campsite = mongoose.model('Campsite', campsiteSchema) // Instatiate documents

module.exports = Campsite;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // SCHEMA
// const campsiteSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     description: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

// // MODEL
// const Campsite = mongoose.model('Campsite', campsiteSchema) // Instatiate documents

// module.exports = Campsite;