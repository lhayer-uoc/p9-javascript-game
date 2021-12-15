const mongoose = require('mongoose');
const Game = require('../models/Game');
const RoomController = require('./room');

class GameController {
  static async getGames() {
    const games = await Game.find({});
    return games;
  }

  static async getGame(id) {
    const game = await Game.findById(id);
    return game;
  }

  static async createGame(game) {
    const { playersData, turn, roomId } = game;
    const newGame = await Game.create({ playersData, turn });

    // Update game in room model
    const room = await RoomController.getRoom(roomId);
    room.game = newGame.id;
    await RoomController.updateRoom(room.id, room);

    return newGame;
  }

  static async updateGame(id, game) {
    await Game.updateOne({ id }, game);
    return await Game.findById(id);
  }

  static async deleteGame(id) {
    const game = await Game.findById(id);
    await Game.deleteOne({ id });

    if (game) {
      // Delete game in room model
      const rooms = await RoomController.getRooms();
      for (let idx = 0; idx < rooms.length; idx++) {
        const room = rooms[idx];

        if (room.game.equals(new mongoose.Types.ObjectId(game.id))) {
          room.game = null;
          await RoomController.updateRoom(room._id, room);
        }
      }
    }

    return game;
  }
}

module.exports = GameController;
