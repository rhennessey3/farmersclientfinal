import React from 'react'
import './Header.css'
import Navbar from '../NavBar/NavBar'
import logo from '../../icons/logo.svg'

export default function Header() {
    return (
        <header className="app-header-a">
            <div className="app-header-logo">
                <a href="/" alt=""><img src={logo} alt="logo" /></a>
            </div>
            <div className="app-nav-system">
                <Navbar />
            </div>
        </header>
    )
}