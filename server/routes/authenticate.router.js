const express = require('express');
const passport = require('passport');

const router = express.Router();

// Handles login form POST from index.html
router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/api/user',
    failureRedirect: '/',
  }),
);

module.exports = router;
