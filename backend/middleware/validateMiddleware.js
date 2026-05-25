const { validationResult } = require('express-validator');
const { errorResponse } = require('../utils/apiResponse');

const validateContact = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Extract the first error message to return
    const errorMessage = errors.array()[0].msg;
    // Note: React frontend expects `error.response.data.error` or standard error message. 
    // We will send `{ success: false, error: errorMessage }` or `{ success: false, message: errorMessage }`.
    // We'll use the apiResponse utility, but add an `error` field just in case frontend looks for it.
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: errorMessage
    });
  }
  next();
};

module.exports = {
  validateContact,
};
