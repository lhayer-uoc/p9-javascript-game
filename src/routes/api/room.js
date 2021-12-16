const express = require('express');
const router = express.Router();
const RoomController = require('../../controllers/room');

router.get('/', async (req, res) => {
  try {
    const rooms = await RoomController.getRooms();
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
    const room = await RoomController.getRoom(id);

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

    const roomDeleted = await RoomController.deleteRoom(id);

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
    const { body } = req;
    const { name, users, state, game } = body;
    const room = { name, users, state, game };

    const roomUpdated = await RoomController.updateRoom(id, room);
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
    const roomCreated = await RoomController.createRoom(body);
    res.statusCode = 200;
    res.json(roomCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

module.exports = router;
