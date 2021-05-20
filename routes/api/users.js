const express = require('express');
const router = express.Router();

const User = require('../../models/user');

router.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json({ users });
  });
});

module.exports = router;
