const Experience = require('../models/Experience');

// @desc    Add new interview experience
// @route   POST /api/experience/add
// @access  Private
const addExperience = async (req, res) => {
  try {
    const {
      companyName,
      role,
      numberOfRounds,
      difficultyLevel,
      questionCategories,
      questionsAsked,
      finalOutcome,
      interviewDate
    } = req.body;

    const experience = await Experience.create({
      companyName,
      role,
      numberOfRounds,
      difficultyLevel,
      questionCategories,
      questionsAsked,
      finalOutcome,
      interviewDate,
      createdBy: req.user._id
    });

    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all experiences
// @route   GET /api/experience/all
// @access  Public
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get experiences by company name
// @route   GET /api/experience/company/:name
// @access  Public
const getExperiencesByCompany = async (req, res) => {
  try {
    const experiences = await Experience.find({ companyName: { $regex: new RegExp(req.params.name, "i") } }).populate('createdBy', 'name');
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Filter experiences
// @route   GET /api/experience/filter
// @access  Public
const filterExperiences = async (req, res) => {
  try {
    const { difficulty, outcome, company } = req.query;
    
    let query = {};
    if (difficulty) query.difficultyLevel = difficulty;
    if (outcome) query.finalOutcome = outcome;
    if (company) query.companyName = { $regex: new RegExp(company, "i") };

    const experiences = await Experience.find(query).populate('createdBy', 'name').sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addExperience,
  getAllExperiences,
  getExperiencesByCompany,
  filterExperiences
};
