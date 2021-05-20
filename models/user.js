const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('User', User);
