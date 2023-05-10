const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }
},{ timestamps: true })

const Material = mongoose.model('Material', materialSchema);
module.exports = Material;