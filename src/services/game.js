class GameService {
  static games = [];

  static getGames() {
    return this.games;
  }

  static setRooms(games) {
    this.games = games;
  }
}

module.exports = GameService;
