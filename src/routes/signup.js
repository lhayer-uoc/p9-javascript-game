const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const SignupController = require('../controllers/signup');

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const user = SignupController.signupUser(body);
    if (user) {
      res.statusCode = 200;
      res.json();
    } else {
      res.statusCode = 404;
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: 'Error signup user' });
  }
});

router.get('/', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  const templatePath = path.join(__dirname, '/../views/signup.html');
  fs.createReadStream(templatePath).pipe(res);
});

module.exports = router;
