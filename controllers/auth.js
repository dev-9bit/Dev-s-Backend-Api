// auth.js
const express = require('express');
const router = express.Router();

const users = {
  "rohit@google.com": "ABC",
  "kohli@google.com": "ABC1",
  "gayle@google.com": "ABC2",
  "dhoni@google.com": "ABC3",
};

router.post('/', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    const error = new Error('Email and password are required.');
    error.status = 400;
    return next(error);
  }

  if (users.hasOwnProperty(email) && users[email] === password) {
    console.log('Authentication successful!');
    res.status(200).json({ success: true, message: 'Authentication successful!' });
  } else {
    const error = new Error('Authentication failed. Invalid email or password.');
    error.status = 401;
    next(error);
  }
});

module.exports = router;
