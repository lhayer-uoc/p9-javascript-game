const RoomController = require('../controllers/room');
const RoomModel = require('../models/Room');
const getReqData = require('../utils');

const roomRouter = async (req, res) => {
  // Consultar todoas las salas
  if (req.url === '/rooms' && req.method === 'GET') {
    try {
      const rooms = RoomController.getRooms();
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(rooms));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/rooms\/([0-9]+)/) && req.method === 'GET') {
    // Consultar una sola sala
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const room = RoomController.getRoom(idNormalized);

      if (room) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(room));
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.end(JSON.stringify(room));
      }
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/rooms\/([0-9]+)/) && req.method === 'DELETE') {
    // Eliminar una sala
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;
      const roomDeleted = RoomController.deleteRoom(idNormalized);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(roomDeleted));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/rooms\/([0-9]+)/) && req.method === 'PATCH') {
    // Actualizar una sala
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const body = await getReqData(req);

      const { name, users } = JSON.parse(body);

      const room = new RoomModel(idNormalized, name, users);
      const roomUpdated = RoomController.updateRoom(idNormalized, room);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(roomUpdated));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url === '/rooms' && req.method === 'POST') {
    // Crear una sala

    const body = await getReqData(req);
    const roomBody = JSON.parse(body);
    const roomCreated = RoomController.createRoom(roomBody);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(roomCreated));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = roomRouter;
