const mongoose = require('mongoose');
// const Course = require('./course')
// const Learner = require('./user')

const enrollSchema = mongoose.Schema({  
    courseId: {
        type : mongoose.Schema.Types.ObjectId,
        ref :'Course',
        required: true

    },
    learnerId: {
        type : mongoose.Schema.Types.ObjectId,
        ref :'User',
        required: true
    },
    progress: {
        type : Number,
        required : true,
        default : 0
    },
    status: {
        type: String,
        default : "Enrolled",
        required : true
    }

},{ timestamps: true })

const Enroll = mongoose.model('Enrollment', enrollSchema);
module.exports = Enroll;