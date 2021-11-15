const GameModel = require('../models/Game');
const gameService = require('../services/game');
const RoomController = require('./room');

class GameController {
  static getGames() {
    return gameService.getGames();
  }

  static getGame(id) {
    const games = gameService.getGames();
    return games.find(game => game.id === id);
  }

  static createGame(game) {
    const id = Math.floor(4 + Math.random() * 10);
    const { playersData, turn, roomId } = game;
    const newGame = new GameModel(id, playersData, turn);
    const games = gameService.getGames();
    games.push(newGame);
    // Update game in room model
    const room = RoomController.getRoom(roomId);
    room.game = newGame.id;
    RoomController.updateRoom(room.id, room);
    return newGame;
  }

  static updateGame(id, game) {
    const games = gameService.getGames();
    const gameFound = games.find(g => g.id === id);
    if (gameFound) {
      gameFound.playersData = game.playersData;
      gameFound.turn = game.turn;
    }
    return gameFound;
  }

  static deleteGame(id) {
    const games = gameService.getGames();
    const gameFound = games.find(g => g.id === id);
    if (gameFound) {
      gameService.setGames(games.filter(game => game.id !== id));
      // Delete game in room model
      const rooms = RoomController.getRooms();
      rooms.forEach(room => {
        if (room.game === gameFound.id) {
          room.game = null;
          RoomController.updateRoom(room.id, room);
        }
      });
    }

    return gameFound;
  }
}

module.exports = GameController;
