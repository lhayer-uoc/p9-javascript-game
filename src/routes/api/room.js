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
    res.json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validaciones
    if (!id) {
      throw new Error('Id inválido');
    }
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
    res.json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validaciones
    if (!id) {
      throw new Error('Id inválido');
    }

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
    res.json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const requiredFields = ['name', 'state'];
    const { id } = req.params;

    const { body } = req;
    const { name, users, state, game } = body;

    // Validaciones
    if (!id) {
      throw new Error('Id inválido');
    }
    if (
      requiredFields.some(
        field => typeof body[field] !== 'undefined' && !body[field]
      )
    ) {
      throw new Error('Campos inválidos');
    }

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
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;

    // Validaciones
    const requiredFields = ['name', 'state'];
    if (requiredFields.some(field => !body[field])) {
      throw new Error('Campos inválidos');
    }

    const roomCreated = await RoomController.createRoom(body);
    res.statusCode = 200;
    res.json(roomCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error.message });
  }
});

module.exports = router;
