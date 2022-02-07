const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).select('+passwordHash')

  if (!user)
    return res.status(404).json({ error: 'user not found' })

  const passwordCorrect = await bcrypt.compare(req.body.password, user.passwordHash)

  if (!passwordCorrect) {
    return res.status(401).json({ error: 'wrong password' })
  }

  const userForToken = {
    username: user.username,
    id: user.id
  }

  const token = jwt.sign(userForToken, config.JWT_SECRET)

  return res.status(200).json({
    token,
    username: user.username
  })
})

module.exports = loginRouter