const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  color: String,
  image: String,
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
