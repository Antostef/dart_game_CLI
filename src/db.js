const mongoose = require('mongoose')
const db = mongoose.connection
const server_error = require('./errors/server_error.js')

const mongoose_options = {
    useNewUrlParser     : true,
    useCreateIndex      : true,
    useUnifiedTopology  : true,
}

mongoose.connect('mongodb://localhost:27017/Dartboard_Game', mongoose_options)
.catch(error => console.log(error.message())
// return error 500 server_error.
);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

module.exports = db;