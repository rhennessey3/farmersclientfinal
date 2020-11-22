import React from 'react';
import './SignUp.css'
import { withRouter } from 'react-router-dom';
import Validator from '../Validator/Validator'
import AuthContext from '../../context/AuthContext'
import AuthApiService from '../../services/auth-api-service'
//import { VendorContext } from '../../context/VendorContext';

 class Signup extends React.Component {
    static contextType = AuthContext

    state = {
        email: '', emailValid: false,
        password: '', passwordValid: false,
        formValid: false,
        error: null,
        validationError: {
            password: null,
            email: null,
        },
        loggedin: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({error: null})
        const { email, password } = this.state
        
        const newUser = { user_name:email, password, ...this.state}
        delete newUser.validationError
        delete newUser.formValid
        delete newUser.loggedin
        delete newUser.passwordValid
        delete newUser.emailValid


        console.log('aaaaa', newUser)
        // const {setLoading} = this.props.VendorContext
        try {
            // setLoading(true)
            const savedUser = await AuthApiService.createUser(newUser)
            this.context.login(savedUser.authToken)
            delete savedUser.authToken
            this.context.setCurrentUser(savedUser)
            this.state.loggedin = true;
            // setLoading(true)
        } catch(err) {
            // this.setState({error: err.message}, setLoading(false))
        }
        //redirect to the add items page
        if (this.state.loggedin) {
            this.props.history.push('/add')
        }
    }

    componentWillUnmount() {
        this.setState({error: null})
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
        [name]: value
        }, name === 'password' ? this.validatePassword : null)
    }

    validateForm = () => {
        const { emailValid, passwordValid } = this.state
        this.setState({
        formValid: emailValid && passwordValid
        })
    }

    validateEmail = () => {
        let emailValid = true
        const validationError = {...this.state.validationError}
        const {email} = this.state

        if (email.startsWith(' ') || email.endsWith(' ')) {
            emailValid = false
            validationError.email = 'cannot begin or end with spaces'
        } else if (!email.length) {
            emailValid = false
            validationError.email = 'is required'
        } else if (!/\S+@\S+/.test(email)) {
            emailValid = false
            validationError.email = 'invalid format'
        }

        this.setState({ emailValid, validationError }, this.validateForm)
        console.log(email)
    }

    validatePassword = () => {
        let passwordValid = true
        const validationError = {...this.state.validationError}
        const {password} = this.state

        if (password.startsWith(' ') || password.endsWith(' ')) {
            passwordValid = false
            validationError.password = 'cannot begin or end with spaces'
        } else if (password.length < 6 || password.length > 72) {
            passwordValid = false
            validationError.password = 'must be between 6 and 72 characters'
        }
        console.log(password,passwordValid,validationError)
        this.setState({passwordValid, validationError}, this.validateForm)
    }

    render() {
        const {validationError, emailValid, passwordValid, formValid} = this.state
        console.log(validationError, emailValid,passwordValid,formValid)
        return (
            <form className='js-registration-form' action='#' onSubmit={this.handleSubmit}>
                <div className='error-msg'>{this.validationError}</div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <Validator isValid={emailValid} msg={validationError.email} />
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        onBlur={this.validateEmail}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label for="psw">Password</label>
                    <Validator isValid={passwordValid} msg={validationError.password} />
                    <input
                        type="password"
                        name="password"
                        id="psw"
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label for="psw">Confirm Password</label>
                    <Validator isValid={passwordValid} msg={validationError.password} />
                    <input
                        type="password"
                        name="psw"
                        id="psw"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label for="farm-name">Name of Farm</label>
                    <input
                        type="farm"
                        name="farm_name"
                        id="farm"
                        placeholder="Farm Name"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label for="address">Street Address</label>
                    <input
                        type="address"
                        name="street_address"
                        id="address"
                        placeholder="Street Address"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label for="city">City</label>
                    <input
                        type="city"
                        name="city"
                        id="city"
                        placeholder="City"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label for="state">State</label>
                    <input
                        type="state"
                        name="state"
                        id="state"
                        placeholder="State"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label for="zip">Zip Code</label>
                    <input
                        type="zip"
                        name="zip"
                        id="zip"
                        placeholder="Zip Code"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-controls">
                    <button disabled={!formValid} type="submit">Submit</button>
                </div>
            </form>
        )
    }
}


export default withRouter(Signup)