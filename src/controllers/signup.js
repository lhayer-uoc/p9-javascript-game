const UserController = require('../controllers/user');

class SignupController {
  static async signupUser(signupData) {
    const { email, password, name, color, image } = signupData;
    const newUser = { name, email, password, color, image };
    const user = await UserController.createUser(newUser);
    return user;
  }
}

module.exports = SignupController;
