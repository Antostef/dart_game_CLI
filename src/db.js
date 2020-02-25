const mongoose      = require('mongoose')
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
    }
  }

module.exports = db;