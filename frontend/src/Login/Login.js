import { Link, useHistory } from 'react-router-dom'
import React, {useState} from 'react'
import './Login.css'
import { auth } from '../Firebase/firebase';



function Login() {
    
    const history = useHistory();
    // variables that placed as containers to put input made by the user
    // email = e => SetEmail(e.target.value)
    // password = e => SetPassword(e.target.value)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //sigIn function that allow us to use email and password that was inserted from the user input
    // And checks if the user exists from the firebase db
    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push("/")
        })
        .catch(error => alert(error.message))
    }


    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message)) 
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" alt="" src="https://www.ruhanirabin.com/userfiles/2019/11/amazon-logo-transparent-600x181.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                     <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password}  onChange={e => setPassword(e.target.value)}  />

                    <button type="submit" className="login_signInBtn" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    <strong>Disclaimer</strong>: This is a fake Amazon Clone created by Tumelo Mahlangu and Lehlohonolo Mopeli
                    to showcase their ReactJs skills. This web application has full user authentication(you can register and gain access).
                    If you just want to test, use the following login details:
                    
                </p>
                <span className="email"><strong>Email : guest@gmail.com</strong></span>
                <span className="password"><strong>Password : 123456</strong></span> 



                <button className="Login_registrationBtn" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
      
    )
}

export default Login
