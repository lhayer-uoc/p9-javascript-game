const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const LoginController = require('../controllers/login');
const UserController = require('../controllers/user');

router.post('/', async (req, res) => {
  const { body } = req;

  if (LoginController.loginUser(body)) {
    const user = UserController.getUserByEmail(body.email);
    // TODO DELETE USER PASSWORD ON RESPONSE
    // delete user.password;
    res.statusCode = 200;
    res.json(user);
  } else {
    res.statusCode = 404;
    res.json({ message: 'User not found' });
  }
});

router.get('/', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  const templatePath = path.join(__dirname, '/../views/login.html');
  fs.createReadStream(templatePath).pipe(res);
});

module.exports = router;
