const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET channels route
router.get('/getchannels', (req, res) => {
  console.log('Retrieving channels from prime_app database');
  let queryText = (`SELECT * FROM "channels";`)
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
    .catch(error => {
      console.log('Error obtaining messages', error);
      res.sendStatus(418);
    });
});





module.exports = router;