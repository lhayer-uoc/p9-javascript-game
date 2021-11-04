const fs = require('fs');
const path = require('path');

const LoginController = require('../controllers/login');
const getReqData = require('../utils');

const loginRouter = async (req, res) => {
  if (req.url === '/login' && req.method === 'POST') {
    // Try login
    const body = await getReqData(req);
    const loginData = new URLSearchParams(body);
    const loginBody = {
      email: loginData.get('email'),
      password: loginData.get('password'),
    };
    if (LoginController.loginUser(loginBody)) {
      res.writeHead(301, { Location: '/room-game' });
      res.end();
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
