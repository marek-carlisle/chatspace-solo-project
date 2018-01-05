var pg = require('pg');
var url = require('url');
var config = {};

if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  // https://github.com/brianc/node-pg-pool
  var params = url.parse(process.env.DATABASE_URL);
  var auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true, // heroku requires ssl to be true
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    user: process.env.PG_USER || null, // env var: PGUSER
    password: process.env.DATABASE_SECRET || null, // env var: PGPASSWORD
    host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
    port: process.env.DATABASE_PORT || 5432, // env var: PGPORT    
    database: process.env.DATABASE_NAME || 'prime_app', // env var: PGDATABASE
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

const pool = new pg.Pool(config);

pool.on('connect', (client) => {
  console.log('Postgesql connected');
})

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;