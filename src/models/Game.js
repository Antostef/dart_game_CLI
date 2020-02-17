const mongoose = require('mongoose')

const game_schema = new mongoose.Schema({
    row_id: { type: Number, required: true, unique: true },
    pseudo: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String }
  })

module.exports = game_schema;