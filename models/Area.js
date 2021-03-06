const mongoose = require('mongoose');
const { Schema } = mongoose;

const polygonSchema = new mongoose.Schema({
    // type: {
    //     type: String,
    //     enum: ['Polygon'],
    //     required: true
    // },
    coordinates: {
        type: [{ latitude: Number, longitude: Number }],
        required: true
    }
});

const AreaSchema = new Schema({
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cities',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
    },
    image_url: {
        type: String,
    },
    colour: {
        type: String
    },
    bounds: {
        type: polygonSchema,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model('areas', AreaSchema);