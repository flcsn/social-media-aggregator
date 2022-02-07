import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'

import RegistrationForm from './RegistrationForm'


const LoginForm = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState(true)

  const loginUser = (event) => {
    event.preventDefault()
    console.log('logging in with credentials: ', username, password)
    dispatch(login(username, password))
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(event) => loginUser(event)}>
        <label>Username</label>
        <input
          name='username'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          type='text'
        />
        <label>Password</label>
        <input
          name='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type='password'
        />
        <button type='submit'>Login</button>
      </form>
      <button onClick={() => setRegistered(false)}>Not registered?</button>
      { !registered && <RegistrationForm /> }
    </div>
  )
}

export default LoginForm