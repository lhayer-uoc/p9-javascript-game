const fs = require('fs');
const path = require('path');

const LoginController = require('../controllers/login');
const UserController = require('../controllers/user');
const getReqData = require('../utils');

const loginRouter = async (req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    // Try login
    let body = await getReqData(req);
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }

    if (LoginController.loginUser(body)) {
      const user = UserController.getUserByEmail(body.email);
      delete user.password;
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(user));
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Route not found' }));
    }
  } else if (req.url === '/login' && req.method === 'GET') {
    // Render login page
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const templatePath = path.join(__dirname, '/../views/login.html');
    fs.createReadStream(templatePath).pipe(res);
  }
};

module.exports = loginRouter;
