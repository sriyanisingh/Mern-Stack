const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Please add a company name']
  },
  role: {
    type: String,
    required: [true, 'Please add a role']
  },
  numberOfRounds: {
    type: Number,
    required: [true, 'Please specify the number of rounds']
  },
  difficultyLevel: {
    type: String,
    required: [true, 'Please select a difficulty level'],
    enum: ['Easy', 'Medium', 'Hard']
  },
  questionCategories: {
    type: [String],
    required: [true, 'Please select at least one question category']
  },
  questionsAsked: {
    type: String,
    required: [true, 'Please provide the questions asked']
  },
  finalOutcome: {
    type: String,
    required: [true, 'Please select the final outcome'],
    enum: ['Selected', 'Rejected']
  },
  interviewDate: {
    type: Date,
    required: [true, 'Please specify the interview date']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
