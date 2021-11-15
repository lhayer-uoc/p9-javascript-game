const GameController = require('../controllers/game');
const GameModel = require('../models/Game');
const getReqData = require('../utils');

const gameRouter = async (req, res) => {
  // Consultar todos los juegos
  if (req.url === '/games' && req.method === 'GET') {
    try {
      const games = GameController.getGames();
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(games));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/games\/([0-9]+)/) && req.method === 'GET') {
    // Consultar un solo juego
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const game = GameController.getGame(idNormalized);

      if (game) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(game));
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.end(JSON.stringify(game));
      }
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 500;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/games\/([0-9]+)/) && req.method === 'DELETE') {
    // Eliminar un juego
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;
      const gameDeleted = GameController.deleteGame(idNormalized);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(gameDeleted));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url.match(/\/games\/([0-9]+)/) && req.method === 'PATCH') {
    // Actualizar un juego
    try {
      const id = req.url.split('/')[2];
      const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

      const body = await getReqData(req);

      const { playersData, turn } = JSON.parse(body);

      const game = new GameModel(idNormalized, playersData, turn);
      const gameUpdated = GameController.updateGame(idNormalized, game);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(gameUpdated));
    } catch (error) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url === '/games' && req.method === 'POST') {
    // Crear un juego

    const body = await getReqData(req);
    const gameBody = JSON.parse(body);
    const gameCreated = GameController.createGame(gameBody);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(gameCreated));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = gameRouter;
