const express = require('express');
const router = express.Router();

const GameController = require('../../controllers/game');
const GameModel = require('../../models/Game');

router.get('/', async (req, res) => {
  try {
    const games = GameController.getGames();
    res.statusCode = 200;
    res.json(games);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const idNormalized = id && !isNaN(parseFloat(id)) ? parseFloat(id) : null;

    const game = GameController.getGame(idNormalized);

    if (game) {
      res.statusCode = 200;
      res.json(game);
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
    const gameDeleted = GameController.deleteGame(idNormalized);
    if (gameDeleted) {
      res.statusCode = 200;
      res.json(gameDeleted);
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

    const { playersData, turn } = body;

    const game = new GameModel(idNormalized, playersData, turn);
    const gameUpdated = GameController.updateGame(idNormalized, game);
    if (gameUpdated) {
      res.statusCode = 200;
      res.json(gameUpdated);
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
    const gameCreated = GameController.createGame(body);
    res.statusCode = 200;
    res.json(gameCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

module.exports = router;
