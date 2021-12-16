const User = require('../models/User');

class UserController {
  static async getUsers() {
    const users = await User.find({});
    return users;
  }

  static async getUser(id) {
    const user = await User.findById(id);
    return user;
  }

  static async getUserByEmail(email) {
    const user = await User.find({ email });
    return user;
  }

  static async createUser(user) {
    // TODO: ADD VALIDATORS

    const { name, email, password, color, image } = user;
    const newUser = await User.create({
      name,
      email,
      password,
      color,
      image,
    });
    return newUser;
  }

  static async updateUser(id, user) {
    // TODO: ADD VALIDATORS
    await User.updateOne({ _id: id }, user);
    return await User.findById(id);
  }

  static async deleteUser(id) {
    const user = await User.findById(id);
    await User.deleteOne({ _id: id });
    return user;
  }
}

module.exports = UserController;
