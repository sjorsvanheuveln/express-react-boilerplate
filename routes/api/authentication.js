const express = require('express');
const passport = require('passport');
const User = require('../../models/user');

const router = express.Router();

function passportLogin(req, res) {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      console.log('passport response correct', res.statusCode);
      return res.json(req.user);
    }
    console.log('passport response correct', res.statusCode);
    return res.json({ error: 'There was an error logging in.' });
  });
}

// Get ot /checksession
router.get('/checksession', (req, res) => {
  console.log('req.user', req.user);
  if (req.user) {
    return res.json(req.user);
  }
  return res.json({});
});

// Post to register
router.post('/register', async (req, res) => {
  const query = User.findOne({ email: req.body.email });
  const foundUser = await query.exec();

  if (foundUser) {
    return res.json({ error: 'BACKEND: Email of username bestaat al.' });
  }

  const newUser = new User(req.body);

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      return res.json({ error: err });
    }

    // log user in if no errors
    return passportLogin(req, res);
  });
});

// Post to login
router.post('/login', async (req, res) => passportLogin(req, res));

router.get('/logout', (req, res) => {
  console.log('logging out', req.body, req.user);
  req.logout();
  return res.json(req.user);
});

module.exports = router;
