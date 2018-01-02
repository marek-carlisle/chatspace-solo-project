var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var passport = require('./strategies/user_sql');
var session = require('express-session');

// Route includes
var user = require('./routes/user.sql');
var register = require('./routes/register.sql');
var index = require('./routes/index.sql')

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

// allows certain cross-origin requests
app.use(cors(corsOptions));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/** Routes **/
app.use('/api/register', register);
app.use('/api/user', user);
app.use('/api/*', index);

// handles redirect from passport login failure
app.use('/loginFailure', function(req, res) {
    res.sendStatus(403);
});

// Serve static files
app.use(express.static(path.resolve(__dirname, '../', 'public')));


// App Set //
app.set('port', (process.env.PORT || 5000));

/** Listen **/
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
