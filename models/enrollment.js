const mongoose = require('mongoose');


const enrollSchema = mongoose.Schema({  
    courseId: {
        type : mongoose.Schema.Types.ObjectId,
        required: true

    },
    learnerId: {
        type : mongoose.Schema.Types.ObjectId,
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