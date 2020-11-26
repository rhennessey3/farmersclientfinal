import React from 'react'
import LoginForm from '../../components/LogInForm/LogInForm'
import basketicon from "../../icons/farmersbasket.svg";

import './LoginPage.css'

export default function LoginPage () {
    return (
      <section className='LoginPage'>
        <img src={basketicon} alt="" />
        <h2>Login</h2>
        <LoginForm />
      </section>
    )
  }
