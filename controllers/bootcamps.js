const Bootcamp = require('../models/Bootcamp');

// @desc     Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps
  });
};

// @desc     Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.findById(id);

    if (!bootcamp) {
      throw new Error(`No bootcamp found with _id ${id}`);
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    next(error);
  }
};

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
exports.updateBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const bootcamp = await Bootcamp.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      throw new Error(`No bootcamp found with _id ${id}`);
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ success: false, errors: error.message });
  }
};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.findByIdAndRemove(id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, errors: error.message });
  }
};
