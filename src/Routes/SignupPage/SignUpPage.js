import React from 'react'
import Signup from '../../components/SignUpForm/SignUp'
import './SignUpPage.css'

export default function SignUpPage () {
    return (
      <section className='RegistrationPage content'>
        <h2>Create Your Account</h2>
        <Signup />
      </section>
    )
  }
