const fs = require('fs');
const path = require('path');
const userRouter = require('./user');
const loginRouter = require('./login');

const publicPath = path.join(__dirname, '../public');

const router = (req, res) => {
  const url = req.url;
  if (isUserRoute(url)) {
    userRouter(req, res);
  } else if (isLoginRoute(url)) {
    loginRouter(req, res);
  } else if (req.url === '/') {
    fs.readFile(`${publicPath}/index.html`, 'UTF-8', (error, html) => {
      if (error) {
        console.log(error);
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  } else if (req.url.match('.css$')) {
    const cssPath = path.join(__dirname, '../public', req.url);
    const fileStream = fs.createReadStream(cssPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  }
};

const isUserRoute = url => {
  return url === '/users' || url.match(/\/users\/([0-9]+)/);
};

const isLoginRoute = url => {
  return url === '/login';
};

module.exports = router;
