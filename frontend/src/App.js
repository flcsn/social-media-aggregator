import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rememberLocalUser } from './reducers/userReducer'

import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'

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
      <LandingPage />
    )
  }

  return (
    <HomePage />
  )
}

export default App