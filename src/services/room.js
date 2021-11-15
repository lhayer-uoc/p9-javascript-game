const { RoomState } = require('../enums/roomStates.enum');

class RoomService {
  static rooms = [
    {
      id: 1,
      name: 'Sala 1',
      users: [],
      state: RoomState.waiting,
      game: null,
    },
    {
      id: 2,
      name: 'Sala 2',
      users: [],
      state: RoomState.waiting,
      game: null,
    },
    {
      id: 3,
      name: 'Sala 3',
      users: [],
      state: RoomState.waiting,
      game: null,
    },
    {
      id: 4,
      name: 'Sala 4',
      users: [],
      state: RoomState.waiting,
      game: null,
    },
  ];

  static getRooms() {
    return this.rooms;
  }

  static setRooms(rooms) {
    this.rooms = rooms;
  }
}

module.exports = RoomService;
