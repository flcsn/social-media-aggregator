const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
  return res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user)
    return res.status(404).end()

  return res.json(user)
})

usersRouter.post('/', async (req, res) => {
  if (req.body.password.length < 6) {
    return res.status(400).json({
      error: 'password must be at least 6 characters long'
    })
  }

  const newUser = new User({
    username: req.body.username,
    passwordHash: await bcrypt.hash(req.body.password, 10),
    emailAddress: req.body.emailAddress
  })

  newUser.save()
    .then(result => {
      return res.status(201).json(result)
    })
    .catch(e => {
      return res.status(400).json({
        error: e.message
      })
    })
})

usersRouter.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  if (!user)
    return res.status(404).end()

  await User.deleteOne(user)

  return res.status(204).end()
})

module.exports = usersRouter