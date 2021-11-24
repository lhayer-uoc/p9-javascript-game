// Carga de módulos
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');

const app = express();

// Configuración del servidor
const serverConfigFile = fs.readFileSync(
  path.join(__dirname, '/config/env.json'),
  'utf-8'
);

const serverConfig = JSON.parse(serverConfigFile);
const port = serverConfig['port'] || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ROUTING
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const playRouter = require('./routes/play');
const roomGameRouter = require('./routes/room-game');
const roomRouter = require('./routes/api/room');
const gameRouter = require('./routes/api/game');
const userRouter = require('./routes/api/user');

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/play', playRouter);
app.use('/room-game', roomGameRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/games', gameRouter);
app.use('/api/users', userRouter);

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);

const server = http.createServer(app);

const io = new Server(server, {
  /* options */
});

io.on('connection', socket => {
  console.log(socket.id);
  socket.emit('hello', 'world');
});

server.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
