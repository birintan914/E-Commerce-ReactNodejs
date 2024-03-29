import React, { useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import './navbar.css'
import '../App.css'

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup');
  }

  return (
    <div>
            {auth ? 
              <ul className="nav-ul left">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add-product'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/signup' onClick={logout}>Logout {JSON.parse(auth).name}</Link></li>  
              </ul> :
              <ul className="nav-ul right">
                  <li><Link to='/signup'>Sign Up</Link></li>
                  <li><Link to='/login'>Login</Link></li> 
              </ul>
            }
    </div>
  )
}
export default Navbar