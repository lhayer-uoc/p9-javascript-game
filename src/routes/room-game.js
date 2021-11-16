const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  const templatePath = path.join(__dirname, '/../views/room-game.html');
  fs.createReadStream(templatePath).pipe(res);
});

module.exports = router;
