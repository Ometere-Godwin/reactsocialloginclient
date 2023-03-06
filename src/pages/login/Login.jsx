import React from 'react'
import './login.css';
import { Facebook, GitHub, Google } from '@mui/icons-material';

export default function Login() {

    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self')
    }
    
  return (
    <div className='login'>
        <h1 className="loginTitle">Choose your login method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google" onClick={google}>
                    <Google className='icon'/> Google
                </div>

                <div className="loginButton facebook">
                    <Facebook className='icon'/> Facebook
                </div>

                <div className="loginButton github">
                    <GitHub className='icon'/> Github
                </div>
            </div>

            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password'/>
                <button className="submit">Submit</button>
            </div>
        </div>
    </div>
  )
}
