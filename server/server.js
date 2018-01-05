require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('./strategies/user.strategy');
const session = require('express-session');

// Route includes
const userRouter = require('./routes/user.router');
const registerRouter = require('./routes/register.router');
const authenticateRouter = require('./routes/authenticate.router')

const corsOptions = {
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
app.use('/api/register', registerRouter);
app.use('/api/user', userRouter);
app.use('/api/authenticate', authenticateRouter);

// handles redirect from passport login failure
app.use('/loginFailure', function(req, res) {
    res.sendStatus(403);
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen **/
app.listen(PORT, function(){
   console.log(`Listening on port: ${PORT}`);
});
