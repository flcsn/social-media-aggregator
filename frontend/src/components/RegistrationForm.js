import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../reducers/userReducer'

const RegistrationForm = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const registerUser = async (event) => {
    event.preventDefault()
    console.log('registering user with credentials:', username, password, email)
    dispatch(register(username,  password, email))
    setUsername('')
    setPassword('')
    setEmail('')
  }

  return (
    <div>
      <h2>Register an account</h2>
      <form onSubmit={(event) => registerUser(event)}>
        <label>Username</label>
        <input
          name='username'
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <label>Email address</label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm