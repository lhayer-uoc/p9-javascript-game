// Carga de módulos
const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./routes/router');

// Configuración del servidor
const serverConfigFile = fs.readFileSync(
  path.join(__dirname, '/config/env.json'),
  'utf-8'
);
const serverConfig = JSON.parse(serverConfigFile);
const hostname = serverConfig['hostname'] || 'localhost';
const port = serverConfig['port'] || 3000;

const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
