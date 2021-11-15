const fs = require('fs');
const path = require('path');

const playRouter = async (req, res) => {
  if (
    (req.url === '/play' || req.url.match(/\/play\/([0-9]+)/)) &&
    req.method === 'GET'
  ) {
    // Render login page
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const templatePath = path.join(__dirname, '/../views/play.html');
    fs.createReadStream(templatePath).pipe(res);
  }
};

module.exports = playRouter;
