const mongoose = require('mongoose')

const player_schema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    email: { type: String,
             validate: {
              validator: function(v) {
                var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          }
        },
    gameWin: { type: Number,
                default: 0 },
    gameLost: { type: Number,
                default: 0 },
    createdAt: { type: Date, 
                 default: Date.now}
  })

var player_model = mongoose.model('Player', player_schema)

module.exports = player_model;