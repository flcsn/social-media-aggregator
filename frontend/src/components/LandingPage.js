import React from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <LoginForm />
      <RegistrationForm />
    </div>
  )
}

export default LandingPage