const UserController = require('../controllers/user');

class LoginController {
  static loginUser(loginData) {
    const { email, password } = loginData;
    const user = UserController.getUserByEmail(email);
    return user && user.password === password;
  }
}

module.exports = LoginController;
