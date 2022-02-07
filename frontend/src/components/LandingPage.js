import React from 'react'
import LoginForm from './LoginForm'

import Chicken from './assets/chicken.jpg'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <img src={Chicken}/>
      <LoginForm />
    </div>
  )
}

export default LandingPage