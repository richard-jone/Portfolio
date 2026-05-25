const express = require('express');
const { body } = require('express-validator');
const { submitContact } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validateMiddleware');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Please provide a valid email address'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  validateContact,
  submitContact
);

module.exports = router;
