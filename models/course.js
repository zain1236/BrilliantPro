const mongoose = require('mongoose');


const courseSchema = mongoose.Schema({  
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    materials: [{
        materialId: mongoose.Schema.Types.ObjectId,
    }]
},{ timestamps: true })

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;