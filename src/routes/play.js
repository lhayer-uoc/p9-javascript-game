const fs = require('fs');
const path = require('path');

const roomGameRouter = async (req, res) => {
  if (req.url === '/room-game' && req.method === 'GET') {
    // Render room game page
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const templatePath = path.join(__dirname, '/../views/play.html');
    fs.createReadStream(templatePath).pipe(res);
  }
};

module.exports = roomGameRouter;
