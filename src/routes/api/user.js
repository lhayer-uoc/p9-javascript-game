const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user');
const UserModel = require('../../models/User');

router.get('/', async (req, res) => {
  try {
    const users = UserController.getUsers();
    res.statusCode = 200;
    res.json(users);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

    const user = UserController.getUser(idNormalized);

    if (user) {
      res.statusCode = 200;
      res.json(user);
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
    const userDeleted = UserController.deleteUser(idNormalized);
    if (userDeleted) {
      res.statusCode = 200;
      res.json(userDeleted);
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
    const { name, email, password, color, image } = body;

    const user = new UserModel(
      idNormalized,
      name,
      email,
      password,
      color,
      image
    );
    const userUpdated = UserController.updateUser(idNormalized, user);

    if (userUpdated) {
      res.statusCode = 200;
      res.json(userUpdated);
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
    const userCreated = UserController.createUser(body);
    res.statusCode = 200;
    res.json(userCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

module.exports = router;
