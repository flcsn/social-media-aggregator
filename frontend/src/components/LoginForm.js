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
    <div className='form login-form'>
      <h2>Login</h2>
      <form onSubmit={(event) => loginUser(event)}>
        <div className='form-input'>
          <label>Username:</label>
          <input
            name='username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            type='text'
          />
        </div>
        <div className='form-input'>
          <label>Password:</label>
          <input
            name='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type='password'
          />
        </div>
        <div className='login-form-btns'>
          <button className='btn not-registered-btn' onClick={() => setRegistered(false)}>Not registered?</button>
          <button className='btn login-btn' type='submit'>Login</button>
        </div>
      </form>
      { !registered && <RegistrationForm /> }
    </div>
  )
}

export default LoginForm