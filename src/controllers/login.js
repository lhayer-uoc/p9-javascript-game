const UserController = require('../controllers/user');

class LoginController {
  static async loginUser(loginData) {
    const { email, password } = loginData;
    const users = await UserController.getUserByEmail(email);

    if (!users || users.length > 1) {
      return false;
    }

    return users[0] && users[0].password === password;
  }
}

module.exports = LoginController;
