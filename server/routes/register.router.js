const express = require('express');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

const router = express.Router();

// Handles POST request with new user data
router.post('/', (req, res, next) => {
  const saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
  };

  const queryText = 'INSERT INTO person (username, password) VALUES ($1, $2) RETURNING id';
  pool.query(queryText, [saveUser.username, saveUser.password])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});


module.exports = router;
