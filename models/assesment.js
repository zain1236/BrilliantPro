const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [
    {
      text: {
        type: String,
        required: true
      },
      correct: {
        type: Boolean,
        default: false
      }
    }
  ],
});

const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration : {
    type: Number,
    required: true
  },
  passing : {
    type: Number,
    required: true
  },
  questions: [questionSchema]
},{timestamps : true});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
