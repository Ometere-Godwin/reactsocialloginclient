import React from 'react'
import { Link } from 'react-router-dom';
import './navBar.css';

export default function Navbar({user}) {
  const logout = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  return (
    <div className='navBar'>
        <span className="logo"><Link to = '/' className='logoLink'>RUOWVEFES </Link></span>
        {user ? (
        <ul className="list">
            <li className="listItem">
                <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">
                {user.displayName}
            </li>
            <li className="listItem"onClick={logout}>Logout</li>
        </ul>
        ) : (
          <Link className ='login' to = '/login'>
            Login
          </Link>
          )}
        
    </div>
  )
}
