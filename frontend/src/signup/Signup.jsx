import { useState } from 'react';
import React from "react";

import './signup.css'

 const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const printData = () => {
        console.log(name, email, pass)
    }
   return (
     <div>
        <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="inputBox">
                <label htmlFor="username">Enter Username</label>
                <input type="text" id="username" placeholder='Enter Username' 
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="inputBox">
                <label htmlFor="email">Enter Email</label>
                <input type="text" id="email" placeholder='Enter Email' 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="inputBox">
                <label htmlFor="password">Enter Password</label>
                <input type='password' id="password" placeholder='Enter Password' 
                value={pass} onChange={(e) => setPass(e.target.value)}/>
            </div>
            <button className="signup-button" onClick={printData}>signup</button>
        </div>
     </div>
   )
 }
 export default Signup