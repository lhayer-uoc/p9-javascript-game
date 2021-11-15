class GameModel {
  constructor(id, playersData, turn) {
    this.id = id;
    this.playersData = playersData;
    this.turn = turn;
  }
}

// PLAYERS DATA STRUCTURE
// [
//   {
//     playerId: user id value,
//     points: number,
//   }
// ]

module.exports = GameModel;
