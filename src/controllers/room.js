class UserController {
    static getRooms() {
      return roomService.getRooms();
    }
  
    static getRoom(id) {
      const rooms = userService.getRooms();
      return rooms.find(room => room.id === id);
    }
  
    static createRoom(room) {
      // TODO: ADD VALIDATORS
      const id = Math.floor(4 + Math.random() * 10);
      const { name, UserModel } = room;
      const newRoom = new RoomModel(id, name, UserModel);
      const rooms = roomService.getRooms();
      rooms.push(newRoom);
      return newRoom;
    }
  
    static updateRoom(id, name) {
      // TODO: ADD VALIDATORS
      const rooms = roomService.getRooms();
      const roomFound = rooms.find(u => u.id === id);
      if (roomFound) {
        roomFound.name = user.name;
      }
      return roomFound;
    }
  
    static deleteRoom(id) {
      const rooms = roomService.getRooms();
      const roomFound = rooms.find(u => u.id === id);
      if (roomFound) {
        roomService.setRooms(rooms.filter(room => room.id !== id));
      }
      return roomFound;
    }
  }
  
  module.exports = RoomController;