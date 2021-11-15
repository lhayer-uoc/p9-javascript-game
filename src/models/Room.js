class RoomModel {
  constructor(id, name, users, state, game) {
    this.id = id;
    this.name = name;
    this.users = users;
    this.state = state;
    this.game = game;
  }
}

module.exports = RoomModel;
