class RoomService {
  static rooms = [];

  static getRooms() {
    return this.rooms;
  }

  static setRooms(rooms) {
    this.rooms = rooms;
  }
}

module.exports = RoomService;
