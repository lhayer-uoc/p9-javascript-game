const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user');

router.get('/', async (req, res) => {
  try {
    const users = await UserController.getUsers();
    res.statusCode = 200;
    res.json(users);
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

    const user = await UserController.getUser(id);

    if (user) {
      res.statusCode = 200;
      res.json(user);
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

    const userDeleted = await UserController.deleteUser(id);
    if (userDeleted) {
      res.statusCode = 200;
      res.json(userDeleted);
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
    const requiredFields = ['name', 'email', 'password', 'color'];
    const { id } = req.params;

    const { body } = req;
    const { name, email, password, color, image } = body;

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

    const user = { name, email, password, color, image };

    const userUpdated = await UserController.updateUser(id, user);

    if (userUpdated) {
      res.statusCode = 200;
      res.json(userUpdated);
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
    const requiredFields = ['name', 'email', 'password', 'color'];
    if (requiredFields.some(field => !body[field])) {
      throw new Error('Campos inválidos');
    }
    const userFound = await UserController.getUserByEmail(body.email);

    if (userFound && userFound.length) {
      throw new Error('El usuario ya existe');
    }

    const userCreated = await UserController.createUser(body);
    res.statusCode = 200;
    res.json(userCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error.message });
  }
});

module.exports = router;
