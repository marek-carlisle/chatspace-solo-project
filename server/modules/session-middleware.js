// No changes should be required in this file

const cookieSession = require('cookie-session');

/*
  The cookie session makes it so a user can enters their username and password one time,
  and then we can keep them logged in. We do this by giving them a really long random string
  that the browser will pass back to us with every single request. The long random string is
  something the server can confirm, and then we know that we have the right user.

  You can see this string that gets passed back and forth in the
  `application` ->  `storage` -> `cookies` section of the chrome debugger
*/

module.exports = cookieSession({
  secret: process.env.SERVER_SESSION_SECRET || 'secret', // please set this in your .env file
  key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
});
