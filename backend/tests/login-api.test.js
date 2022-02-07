const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

beforeAll(async () => {
  await User.deleteMany({})
}, 20000)

describe('login', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const data = {
      username: 'testUser',
      password: 'testPassword',
      emailAddress: 'testAddress@email.com'
    }

    await api.post('/api/users')
      .send(data)
      .expect(201)
  })

  test('succeeds with correct credentials', async () => {
    const correctCredentials = {
      username: 'testUser',
      password: 'testPassword'
    }

    await api.post('/api/login')
      .send(correctCredentials)
      .expect(200)
  })

  describe('fails', () => {
    test('with incorrect password', async () => {
      const incorrectPassword = {
        username: 'testUser',
        password: 'testPassword-1'
      }
      await api.post('/api/login')
        .send(incorrectPassword)
        .expect(401)
    })

    test('with non-existent user', async () => {
      const nonExistentUser = {
        username: 'not-a-user',
        password: 'testPassword'
      }
      await api.post('/api/login')
        .send(nonExistentUser)
        .expect(404)
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})