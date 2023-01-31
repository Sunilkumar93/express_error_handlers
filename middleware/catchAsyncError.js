const catchAsyncError = (passedfunc) => (req, res, next) => {
  Promise.resolve(passedfunc(req, res, next)).catch(next);
};

module.exports = { catchAsyncError };
