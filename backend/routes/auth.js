const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.json({ success: true, user: { id: registeredUser._id, email: registeredUser.email } });
    });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ success: false, message: info && info.message ? info.message : 'Invalid credentials' });
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ success: true, user: { id: user._id, email: user.email } });
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true });
  });
});

module.exports = router;
