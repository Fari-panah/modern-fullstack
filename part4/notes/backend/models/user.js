const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true

  },
  name: String,
  //install the bcrypt package for generating the password hashes:
  passwordHash: String,
  //references are now stored in both documents
  notes:[
    {
      type: mongoose.Schema.Types.ObjectId, //ObjectId, meaning it refers to another document.
      ref: 'Note' //specifies the name of the model being referenced.
    }

  ]
})
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
