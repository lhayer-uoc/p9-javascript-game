const UserModel = require('../models/User');
const userService = require('../services/user');

class UserController {
  static getUsers() {
    return userService.getUsers();
  }

  static getUser(id) {
    const users = userService.getUsers();
    return users.find(user => user.id === id);
  }

  static createUser(user) {
    // TODO: ADD VALIDATORS
    const id = Math.floor(4 + Math.random() * 10);
    const { name, email, password, color, image } = user;
    const newUser = new UserModel(id, name, email, password, color, image);
    const users = userService.getUsers();
    users.push(newUser);
    return newUser;
  }

  static updateUser(id, user) {
    // TODO: ADD VALIDATORS
    const users = userService.getUsers();
    const userFound = users.find(u => u.id === id);
    if (userFound) {
      userFound.name = user.name;
      userFound.email = user.email;
      userFound.password = user.password;
      userFound.color = user.color;
      userFound.image = user.image;
    }
    return userFound;
  }

  static deleteUser(id) {
    const users = userService.getUsers();
    const userFound = users.find(u => u.id === id);
    if (userFound) {
      userService.setUsers(users.filter(user => user.id !== id));
    }
    return userFound;
  }
}

module.exports = UserController;
