const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app