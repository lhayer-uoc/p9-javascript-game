const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: String,
  users: [mongoose.ObjectId],
  state: {
    type: String,
    enum: ['Esperando jugadores', 'En curso'],
  },
  game: mongoose.ObjectId,
});

const RoomModel = mongoose.model('room', roomSchema);

module.exports = RoomModel;
