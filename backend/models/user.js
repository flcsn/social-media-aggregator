const mongoose = require('mongoose')
const config = require('../utils/config')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('successfully connected to database'))
  .catch(e => console.log('error connecting to database:', e.message))

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
    select: false
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

userSchema.plugin(uniqueValidator)

module.exports = new mongoose.model('User', userSchema)