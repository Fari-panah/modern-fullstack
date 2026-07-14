const jwt = require('jsonwebtoken')//generates json web token
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')


loginRouter.post('/', async(request, response) => {
  const { username,  password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if(!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })

  }
  //the fields that we want to save in token for identification
  const userForToken = {
    username: user.username,
    id: user._id
  }
  //a token is created with the method jwt.sign
  //The browser saves the token(React decides saves token in browser, state or storage)
  //new request and token are sent to server
  //Anyone who has the token can usually read its contents,
  // but they cannot modify them.so we dont save password
  //in token because at first the password was checked and also because of security
  //who know the secret can generate a valid token. The value for
  //the environment variable must be set in the .env file.
  const token = jwt.sign(userForToken, process.env.SECRET)
  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter