const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  pool.query('SELECT * FROM person WHERE id = $1', [id]).then((result) => {
    // Handle Errors
    const user = result && result.rows && result.rows[0];

    if (user) {
      // user found
      delete user.password; // remove password so it doesn't get sent
      // done takes an error (null in this case) and a user
      done(null, user);
    } else {
      // user not found
      // done takes an error (null in this case) and a user (also null in this case)
      done(null, null);
    }
  }).catch((error) => {
    console.log('Error with query during deserializing user ', error);
    done(error);
  });
});

// Does actual work of logging in
passport.use('local', new LocalStrategy((username, password, done) => {
    pool.query('SELECT * FROM person WHERE username = $1', [username])
      .then((result) => {
        const user = result && result.rows && result.rows[0];
        if (user && encryptLib.comparePassword(password, user.password)) {
          // All good! Passwords match!
          // done takes an error (null in this case) and a user
          done(null, user);
        } else {
          // Not good! No username and password don't match with that name
          // done takes an error (null in this case) and a user (also null in this case)
          done(null, null);
        }
      }).catch((err) => {
        console.log('error', err);
        done(null, {});
      });
  }));

module.exports = passport;
