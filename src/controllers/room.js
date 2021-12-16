const Room = require('../models/Room');

class RoomController {
  static async getRooms() {
    const rooms = await Room.find({});
    return rooms;
  }

  static async getRoom(id) {
    const room = await Room.findById(id);
    return room;
  }

  static async createRoom(room) {
    const { name, users, state, game } = room;
    const newRoom = await Room.create({ name, users, state, game });
    return newRoom;
  }

  static async updateRoom(id, room) {
    await Room.updateOne({ _id: id }, room);
    return await Room.findById(id);
  }

  static async deleteRoom(id) {
    const room = await Room.findById(id);
    await Room.deleteOne({ _id: id });
    return room;
  }
}

module.exports = RoomController;
