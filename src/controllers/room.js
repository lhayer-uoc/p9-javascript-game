const RoomModel = require('../models/Room');
const roomService = require('../services/room');

class RoomController {
  static getRooms() {
    return roomService.getRooms();
  }

  static getRoom(id) {
    const rooms = roomService.getRooms();
    return rooms.find(room => room.id === id);
  }

  static createRoom(room) {
    const id = Math.floor(4 + Math.random() * 10);
    const { name, users, state, game } = room;
    const newRoom = new RoomModel(id, name, users, state, game);
    const rooms = roomService.getRooms();
    rooms.push(newRoom);
    return newRoom;
  }

  static updateRoom(id, room) {
    const rooms = roomService.getRooms();
    const roomFound = rooms.find(r => r.id === id);
    if (roomFound) {
      roomFound.name = room.name;
      roomFound.users = room.users;
      roomFound.state = room.state;
      roomFound.game = room.game;
    }
    return roomFound;
  }

  static deleteRoom(id) {
    const rooms = roomService.getRooms();
    const roomFound = rooms.find(r => r.id === id);
    if (roomFound) {
      roomService.setRooms(rooms.filter(room => room.id !== id));
    }
    return roomFound;
  }
}

module.exports = RoomController;
