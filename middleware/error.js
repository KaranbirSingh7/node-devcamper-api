const errorHandler = (err, req, res, next) => {
  // LOG ERROR for DEV
  console.log(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message
  });
};

module.exports = errorHandler;
