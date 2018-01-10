// No changes should be required in this file

// check the environment, heroku will be 'production' which means it won't allow CORS
const cors = require('cors');

// check the environment
const environment = process.env.NODE_ENV || 'development';
const isDevelopmentEnvironment = environment === 'development';

// middleware function that doesn't do anything (runs on production when CORS shouldn't be allowed)
const doNothing = (req, res, next) => { next(); };

// set options for CORS, these only matter for development
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

// middleware function that allows CORS so localhost:3000 can make requests while in development
const runCors = function() {
  // Warning if user is using CORS, but doesn't have REACT_APP_API_BASE_URL
  if(!process.env.REACT_APP_API_BASE_URL) {
    console.log(`
    ----------------------------
  
    *** WARNING ***
    To run in develop mode, you need REACT_APP_API_BASE_URL
    You don't have REACT_APP_API_BASE_URL
    Please follow the README and add a .env file  
    
    ----------------------------`);
  }

  return cors(corsOptions);
};

const middleware = isDevelopmentEnvironment ? runCors() : doNothing;

module.exports = middleware;
