
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const corsIfInDevelopment = require('./modules/cors-if-on-development');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const registerRouter = require('./routes/register.router');
const authenticateRouter = require('./routes/authenticate.router');

// allows cross-origin requests from localhost:3000 when on development
app.use(corsIfInDevelopment);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/register', registerRouter);
app.use('/api/user', userRouter);
app.use('/api/authenticate', authenticateRouter);

// handles redirect from passport login failure
app.use('/loginFailure', (req, res) => {
  res.sendStatus(403);
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
