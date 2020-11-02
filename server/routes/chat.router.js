const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET messages route
router.get('/messages', (req, res) => {
  console.log('Retrieving stuff from prime_app database');
  let queryText = (`
  SELECT "user"."id", "username", "channel_id", "messages"."id" AS "message_id", "message", "message_date" FROM "user"
  JOIN "messages" ON "messages"."user_id" = "user"."id"
  WHERE "channel_id" = ($1)
  ORDER BY "messages"."message_date" DESC;`)
  pool.query(queryText, [req.body.channel_id])
  .then(result => {
    res.send(result.rows);
  })
    .catch(error => {
      console.log('Error obtaining messages', error);
      res.sendStatus(418);
    });
});

// POST messages route
router.post('/postmessage', rejectUnauthenticated, (req, res) => {
  console.log('Adding message into prime_app database', req.user, req.body);
  let queryText = `INSERT INTO "messages" ("user_id", "channel_id", "message")
  VALUES ($1, $2, $3);`;
  pool.query(queryText, [req.user.id, req.body.channel, req.body.message])
    .then(result => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log('Error posting message', err);
      res.sendStatus(418);
    });
});

// DELETE messages route
router.delete('/deletemessage/:id', rejectUnauthenticated, (req, res) => {
  console.log(req.user, req.params);
  console.log(`Deleting message with ID ${req.params.id} by user ID ${req.user.id} from prime_app database`);
  let queryText = `DELETE FROM "messages" WHERE "id" = $2 AND "user_id" = $1`;
  pool.query(queryText, [req.user.id, req.params.id])
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.log('Error deleting message', err);
      res.sendStatus(418);
    });
});

//PUT messages route
router.put('/editmessage/:id', rejectUnauthenticated, (req, res) => {
  console.log(`Editing message with ID ${req.params.id} by user ID ${req.user.id} from prime_app database`);
  let queryText = `UPDATE "messages" SET "message"=$3 WHERE "id"=$2 AND "user_id" = $1`;
  pool.query(queryText, [req.user.id, req.params.id, req.body.message])
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.log('Error editing message', err);
      res.sendStatus(418);
    });
});



module.exports = router;
