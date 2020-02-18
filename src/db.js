const mongoose      = require('mongoose')
// const db            = mongoose.connection
const server_error  = require('./errors/server_error.js')
const database      = 'Dartboard_Game'
const server        = '127.0.0.1:27017'

const mongoose_options = {
    useNewUrlParser     : true,
    useCreateIndex      : true,
    useUnifiedTopology  : true,
}


const db = async () => {
    try {
      mongodb = await mongoose.connect(`mongodb://${server}/${database}`, mongoose_options)
      console.log('\n Database connection successful \n')
      return mongodb
    } catch (error) {
      console.log(error.message)
      new server_error()
    }
  }

// mongoose.connect(`mongodb://${server}/${database}`, mongoose_options)
// .catch(error => console.log(error.message())
// // return error 500 server_error.
// );

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connection established successfully')
// });

module.exports = db;