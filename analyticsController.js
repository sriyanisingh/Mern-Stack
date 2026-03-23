const Experience = require('../models/Experience');

// @desc    Get simple analytics
// @route   GET /api/analytics
// @access  Public
const getAnalytics = async (req, res) => {
  try {
    const totalExperiences = await Experience.countDocuments();
    const selectedCount = await Experience.countDocuments({ finalOutcome: 'Selected' });
    const rejectedCount = await Experience.countDocuments({ finalOutcome: 'Rejected' });

    const difficultyAgg = await Experience.aggregate([
      { $group: { _id: "$difficultyLevel", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    const commonDifficulty = difficultyAgg.length > 0 ? difficultyAgg[0]._id : 'N/A';

    const categoryAgg = await Experience.aggregate([
      { $unwind: "$questionCategories" },
      { $group: { _id: "$questionCategories", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    const commonCategory = categoryAgg.length > 0 ? categoryAgg[0]._id : 'N/A';

    res.json({
      totalExperiences,
      selectedCount,
      rejectedCount,
      commonDifficulty,
      commonCategory
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAnalytics };
