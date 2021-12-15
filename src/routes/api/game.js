const express = require('express');
const router = express.Router();

const GameController = require('../../controllers/game');

router.get('/', async (req, res) => {
  try {
    const games = await GameController.getGames();
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
    const game = await GameController.getGame(id);

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
    const gameDeleted = await GameController.deleteGame(id);
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
    const { body } = req;

    const { playersData, turn } = body;

    const game = { playersData, turn };
    const gameUpdated = await GameController.updateGame(id, game);
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
    const gameCreated = await GameController.createGame(body);
    res.statusCode = 200;
    res.json(gameCreated);
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error });
  }
});

module.exports = router;
