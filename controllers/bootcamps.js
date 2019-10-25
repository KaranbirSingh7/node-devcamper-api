const Bootcamp = require('../models/Bootcamp');

// @desc     Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.send('GET');
};

// @desc     Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {};

// @desc     Create new single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Public
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

// @desc     Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {};
