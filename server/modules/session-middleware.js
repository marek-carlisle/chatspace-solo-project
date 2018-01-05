const cookieSession = require('cookie-session');

module.exports = cookieSession({
    secret: process.env.SERVER_SESSION_SECRET || 'secret', // please set this in your .env file
    key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
    resave: 'true',
    saveUninitialized: false,
    cookie: { maxage: 60000, secure: false }
});