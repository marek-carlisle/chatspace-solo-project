const express = require('express');
const router = express.Router();
const passport = require('passport');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/api/user',
        failureRedirect: '/'
    })
);

module.exports = router;
