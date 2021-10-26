const UserController = require('../controllers/user');
const UserModel = require('../models/User');
const getReqData = require('../utils');

const userRouter = async (req, res) => {
  // Consultar todos los usuarios
  if (req.url === '/users' && req.method === 'GET') {
    try {
      const users = UserController.getUsers();
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(users));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/users\/([0-9]+)/) && req.method === 'GET') {
    // Consultar un solo usuario
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const user = UserController.getUser(idNormalized);

      if (user) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(user));
      }
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify(user));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/users\/([0-9]+)/) && req.method === 'DELETE') {
    // Eliminar un usuario
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;
      const userDeleted = UserController.deleteUser(idNormalized);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(userDeleted));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/users\/([0-9]+)/) && req.method === 'PATCH') {
    // Actualizar un usuario
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const body = await getReqData(req);

      const { name, email, password, color, image } = JSON.parse(body);

      const user = new UserModel(
        idNormalized,
        name,
        email,
        password,
        color,
        image
      );
      const userUpdated = UserController.updateUser(idNormalized, user);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(userUpdated));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url === '/users' && req.method === 'POST') {
    // Crear un usuario

    const body = await getReqData(req);
    const userBody = JSON.parse(body);
    const userCreated = UserController.createUser(userBody);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(userCreated));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = userRouter;
