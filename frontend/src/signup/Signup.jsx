import { useEffect, useState } from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import React from "react";

// import './signup.css'
import '../App.css'

 const Signup = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    }, [])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const collectData = async () => {
        console.log(name, email, pass);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({name, email, password: pass}),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        result = await result.json();
        console.warn(result)
        localStorage.setItem('user', JSON.stringify(result));
        navigate("/");

    }
   return (
     <div>
        <div className="container">
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
            <button className="button" onClick={collectData}>signup</button>
        </div>
     </div>
   )
 }
 export default Signup