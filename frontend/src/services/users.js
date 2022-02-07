import axios from 'axios'

const usersBaseURL = 'http://localhost:3001/api/users'
const loginBaseURL = 'http://localhost:3001/api/login'

const register = async (username, password, emailAddress) => {
  const newUserDetails = { username, password, emailAddress }
  const response = await axios.post(usersBaseURL, newUserDetails)

  return response.data
}

const login = async (username, password) => {
  const credentials = { username, password }
  const response = await axios.post(loginBaseURL, credentials)
  return response.data
}

export default {
  register,
  login,
}