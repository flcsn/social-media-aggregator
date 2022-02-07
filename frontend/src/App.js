import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rememberLocalUser } from './reducers/userReducer'

import Homepage from './components/Homepage'
import LoginForm from './components/LoginForm'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('social-media-aggregator-user')
    if (userJSON)
      dispatch(rememberLocalUser(JSON.parse(userJSON)))
  }, [])

  if (!user) {
    return (
      <LoginForm />
    )
  }

  return (
    <Homepage />
  )
}

export default App