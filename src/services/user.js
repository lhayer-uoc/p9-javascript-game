class UserService {
  static users = [];

  static getUsers() {
    return this.users;
  }

  static setUsers(users) {
    this.users = users;
  }
}

module.exports = UserService;
