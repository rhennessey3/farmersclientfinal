import React from 'react'
import Signup from '../../components/SignUpForm/SignUp'
import farmersicon from "../../icons/farmers-icon.svg";

import './SignUpPage.css'

export default function SignUpPage () {
    return (
      <section className='RegistrationPage content'>
        <img src={farmersicon} alt="" />
        <h2>Create Your Account</h2>
        <Signup />
      </section>
    )
  }
