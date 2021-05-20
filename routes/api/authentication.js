const express = require('express');
const User = require('../../models/user');

const router = express.Router();

/* GET home page. */
router.get('/register', (req, res) => {
  res.json({ data: 'Registration Page' });
});

router.post('/register', (req, res) => {
  const newUser = new User(req.body);

  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

module.exports = router;
