const mongoose = require('mongoose')

const game_schema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    mode: { type: String,
            enum: ['around-the-world', '301', 'cricket']},
    name: { type: String },
    currentPlayerId: { type: String },
    status: { type: String,
              enum: ['draft', 'started', 'ended'] },
    createdAt: { type: Date, 
                 default: Date.now }
  })

module.exports = game_schema;