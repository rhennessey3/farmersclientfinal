import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import TokenService from '../../services/TokenService'
import './NavBar.css'



export default class NavBar extends Component {
    static contextType = AuthContext;
    
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false,
        };
        this.logoutUser = this.logoutUser.bind(this);
    }
   

    logoutUser = () => {
        this.context.logout();
        this.setState ({
            isLoggedIn: !this.state.isLoggedin,
        })
     
    }

    render() {
        const { login } = this.state;        
            return (
                <div className="nav">
                    <div className="logo"></div>
                    <div className="menu">
                        <ul>
                            {TokenService.hasAuthToken() ? (<li><Link to="/add">Add Item</Link></li>) : ""}

                            <li><Link to="/login" onClick={() => this.logoutUser()}>{TokenService.hasAuthToken() ? "Logout" : "Login"}</Link></li>


                        </ul>
                    </div>
                </div>
            )
        }
    }
