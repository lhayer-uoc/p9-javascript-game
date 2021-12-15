const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const LoginController = require('../controllers/login');
const UserController = require('../controllers/user');

router.post('/', async (req, res) => {
  const { body } = req;
  const isValidUser = await LoginController.loginUser(body);

  if (isValidUser) {
    const users = await UserController.getUserByEmail(body.email);

    // TODO DELETE USER PASSWORD ON RESPONSE
    // delete user.password;
    res.statusCode = 200;
    res.json(users[0]);
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
