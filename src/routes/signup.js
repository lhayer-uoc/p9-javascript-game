const fs = require('fs');
const path = require('path');

const SignupController = require('../controllers/signup');
const getReqData = require('../utils');

const signupRouter = async (req, res) => {
  if (req.url === '/signup' && req.method === 'POST') {
    // Signup user
    const body = await getReqData(req);
    const signupData = new URLSearchParams(body);

    const signupBody = {
      email: signupData.get('email'),
      password: signupData.get('password'),
      name: signupData.get('name'),
      color: signupData.get('color'),
      image: signupData.get('image'),
    };
    const user = SignupController.signupUser(signupBody);
    if (user) {
      res.writeHead(301, { Location: '/rooms' });
      res.end();
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: 'Error signup user' }));
    }
  } else if (req.url === '/signup' && req.method === 'GET') {
    // Render signup page
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const templatePath = path.join(__dirname, '/../views/signup.html');
    fs.createReadStream(templatePath).pipe(res);
  }
};

module.exports = signupRouter;
