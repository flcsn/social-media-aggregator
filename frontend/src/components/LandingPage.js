import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const LandingPage = () => {
  const [isRegistered, setIsRegistered] = useState(true)

  const openRegistrationForm = (event) => {
    event.preventDefault()
    setIsRegistered(!isRegistered)
  }

  return (
    <div className='landing-page'>
      <LoginForm openRegistrationForm={openRegistrationForm} />
      <RegistrationForm isRegistered={isRegistered}/>
    </div>
  )
}

export default LandingPage