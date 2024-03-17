import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async ()=>{
        //console.log(email, password)
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (!result.name) {
            alert("Incorrect Login");
        } else {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
        }
        
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="inputBox">
                <label htmlFor="email">Enter Email</label>
                <input type="text" id="email" placeholder='Email' value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="inputBox">
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="button" onClick={handleLogin}>Submit</button>
            
            
        </div>
    )
}

export default Login;