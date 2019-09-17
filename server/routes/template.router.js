const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * from "tester";`)
        .then((response) => {
            console.log(response.rows)
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('testError: ', err);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;