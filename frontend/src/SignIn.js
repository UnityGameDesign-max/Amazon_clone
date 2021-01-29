import React from 'react'
import './SignIn.css'

function SignIn({title, btn_text, image}) {
    return (
        <div className='sign_in_catergories'>
            <div className='sign_in'>
                <h2 className="card_header">{title}</h2>
                <button className='sigin_btn'>{btn_text}</button>
            </div>

            <div className="description_catergories">
                <img alt="" src={image}/>
            </div>
        </div>
    )
}

export default SignIn
