const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    // Don't think we should password in database. Maybe use 0Auth?
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
})

module.exports = mongoose.model('admins', AdminSchema);