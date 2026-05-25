const Contact = require('../models/Contact');
const { successResponse } = require('../utils/apiResponse');

const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return successResponse(res, 201, 'Message sent successfully', newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
};
