import React from 'react'
import './SignIn.css'
import { useHistory } from 'react-router-dom'

function SignIn({title, btn_text, image}) {

    const history = useHistory();


    const handle_signIn = () =>{
        history.push("/login")    

    }

    return (
        <div className='sign_in_catergories'>
            <div className='sign_in'>
                <h2 className="card_header">{title}</h2>
                <button className='sigin_btn' onClick={handle_signIn}>{btn_text}</button>
            </div>
            <div className="description_catergories">
                <img alt="" src={image}/>
            </div>
        </div>
    )
}

export default SignIn
