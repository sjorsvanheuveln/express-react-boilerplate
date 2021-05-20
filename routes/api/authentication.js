const express = require('express');
const passport = require('passport');
const User = require('../../models/user');

const router = express.Router();

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

router.post('/login', (req, res) => {
  console.log('login', req.body);
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      console.log('req.user', req.user);
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: 'There was an error logging in.' }));
  });
});

router.get('/logout', (req, res) => {
  console.log('logout', req.user);
  req.logout();
  console.log('req.user:', req.user);
  return res.send(JSON.stringify(req.user));
});

module.exports = router;
