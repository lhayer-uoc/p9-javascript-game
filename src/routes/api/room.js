const express = require('express');
const router = express.Router();
const RoomController = require('../../controllers/room');
const RoomModel = require('../../models/Room');

router.get('/', async (req, res) => {
  try {
    const rooms = RoomController.getRooms();
    res.statusCode = 200;
    res.json(rooms);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

    const room = RoomController.getRoom(idNormalized);

    if (room) {
      res.statusCode = 200;
      res.json(room);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;
    const roomDeleted = RoomController.deleteRoom(idNormalized);

    if (roomDeleted) {
      res.statusCode = 200;
      res.json(roomDeleted);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

    const { body } = req;

    const { name, users, state, game } = body;

    const room = new RoomModel(idNormalized, name, users, state, game);
    const roomUpdated = RoomController.updateRoom(idNormalized, room);
    if (roomUpdated) {
      res.statusCode = 200;
      res.json(roomUpdated);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const roomCreated = RoomController.createRoom(body);
    res.statusCode = 200;
    res.json(roomCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

module.exports = router;
