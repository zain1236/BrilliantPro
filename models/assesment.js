const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [
    {
      optionText: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        default: false
      }
    }
  ],
});


const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questions: [questionSchema]
},{timestamps : true});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
