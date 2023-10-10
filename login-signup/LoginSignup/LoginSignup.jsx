import React from 'react'
// import './LoginSignup.css'

import user_icon from '../components/Assets/person.png'
import email_icon from '../components/Assets/email.png'
import password_icon from '../components/Assets/password.png'


const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="te">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" name="" id="" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="" id="" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default LoginSignup