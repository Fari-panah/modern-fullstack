const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')


usersRouter.post('/', async(request, response) => {
  const { username, name, password } = request.body

  if (password.length < 8) {
    return response.status(400).json({
      error: 'password must be at least 8 characters'
    })
  }
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

  if (!strongPassword.test(password)) {
    return response.status(400).json({
      error:
      'password must contain uppercase, lowercase and a number'
    })}

  if (username.includes(' ')) {
    return response.status(400).json({
      error: 'username cannot contain spaces'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,

  })
  const savedUser = await user.save()
  response.status(201).json(savedUser)
})
usersRouter.get('/', async (request, response) => {
  //returns fields of document not just id:
  const users = await User.find({}).populate('notes', { content: 1, important: 1 })
  response.json(users)
})

module.exports = usersRouter