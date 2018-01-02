var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user.js');
var path = require('path');


// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  recipes: {type: Array}
  */
  var userToSave = {
    username : req.body.username,
    password : req.body.password
  };

  // save to database, triggers user model pre-save hook
  Users.create(userToSave, function(err, post) {
        if(err) {
          console.log('error saving to db: ', err);           
          res.sendStatus(500);
        } else {
          console.log('created new user in db: ', post);          
          res.sendStatus(201);
        }
  });
  
});


module.exports = router;
