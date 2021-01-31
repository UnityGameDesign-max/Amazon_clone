import { Link } from 'react-router-dom'
import React from 'react'
import './Login.css'



function Login() {
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" alt="" src="https://www.ruhanirabin.com/userfiles/2019/11/amazon-logo-transparent-600x181.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login_signInBtn">Sign In</button>
                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions
                    of Use & Sale. Please see our Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice.
                </p>

                <button className="Login_registrationBtn">Create your Amazon Account</button>
            </div>
        </div>

      
    )
}

export default Login
