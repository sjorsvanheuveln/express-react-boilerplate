const express = require('express');
const passport = require('passport');
const User = require('../../models/user');

const router = express.Router();

function passportLogin(req, res) {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      console.log('passport login, req.user:', req.user);
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: 'There was an error logging in.' }));
  });
}

// Get ot /checksession
router.get('/checksession', (req, res) => {
  if (req.user) {
    return res.send(JSON.stringify(req.user));
  }
  return res.send(JSON.stringify({}));
});

// Post to register
router.post('/register', (req, res) => {
  console.log('register backend', req.body);
  const newUser = new User(req.body);

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }

    // log user in if no errors
    return passportLogin(req, res);
  });
});

// Post to login
router.post('/login', async (req, res) => {
  // console.log('login', req.body);
  // console.log('again', req.user);
  const query = User.findOne({ username: req.body.username });
  const foundUser = await query.exec();

  if (foundUser) {
    req.body.username = foundUser.username;
  }
  return passportLogin(req, res);
});

router.get('/logout', (req, res) => {
  console.log('logout', req.user);
  req.logout();
  console.log('req.user:', req.user);
  return res.send(JSON.stringify(req.user));
});

module.exports = router;
