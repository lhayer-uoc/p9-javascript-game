class UserModel {
  constructor(id, name, email, password, color, image) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.color = color;
    this.image = image;
  }
}

module.exports = UserModel;
