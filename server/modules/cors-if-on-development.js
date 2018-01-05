const environment = process.env.NODE_ENV || 'development';
const isDevelopmentEnvironment = environment === 'development';
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};

const middleware = isDevelopmentEnvironment ? cors(corsOptions) : (req, res, next) => { next() };

module.exports = middleware;