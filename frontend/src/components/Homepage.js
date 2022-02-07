import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'

const Homepage = () => {
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    console.log('logging out')
    dispatch(logout())
  }

  return (
    <div>
      <h2>Hello!</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Homepage