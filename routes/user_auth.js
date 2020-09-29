const router = require('express').Router();
const User = require('../models/User');



router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedSuser = await user.save();
    res.send(savedSuser);
  } catch (err) {
    res.status(400).send(err);
  }
});



module.exports = router;