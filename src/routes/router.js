const roomRouter = require('./room');
const userRouter = require('./user');

const router = (req, res) => {
  const url = req.url;
  if (isUserRoute(url)) {
    userRouter(req, res);
  } else if (isRoomRoute(url)) {
    roomRouter(req, res);
  }
};

const isUserRoute = url => {
  return url === '/users' || url.match(/\/users\/([0-9]+)/);
};

const isRoomRoute = url => {
  return url === '/rooms' || url.match(/\/rooms\/([0-9]+)/);
};

module.exports = router;
