const mongoose = require('mongoose')

const game_shot_schema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    gameId: { type: String },
    playerId: { type: String },
    multiplicator: { type: Number,
                     enum: [ 1, 2, 3 ] },
    sector: { type: Number },
    createdAt: { type: Date,
                 default: Date.now }
  })

module.exports = game_shot_schema;