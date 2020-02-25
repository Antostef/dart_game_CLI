const mongoose = require('mongoose')

const game_player_schema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    playerId: { type: String },
    gameId: { type: String },
    remainingShots: { type: String },
    score: { type: String },
    rank: { type: String,
            default: null },
    order: { type: Number,
             default: null }, 
    createdAt: { type: Date,
                default: Date.now }
  })

var game_player_model = mongoose.model('GamePlayer', game_player_schema)

module.exports = game_player_model;