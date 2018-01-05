var express = require('express');
var router = express.Router();
var passport = require('passport');
// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var pool = require('../modules/pool');

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password)
  };
  console.log('new user:', saveUser);

  pool.connect(function(err, client, done) { //previous change had connection, function(err, ...)...
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO person (username, password) VALUES ($1, $2) RETURNING id",
      [saveUser.username, saveUser.password],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            // res.redirect('/');
            res.sendStatus(201)
          }
        });
  });

});


module.exports = router;
