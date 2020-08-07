import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase";



function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {

    
        event.preventDefault(); //this is stop the refresh
    
        auth.signInWithEmilAndPassword(email,password)
        .then((auth) => {
            history.push("/");

        })
        .catch(e => alert(e.message));
        
    }
    
    const register = event => {
        event.preventDefault(); //this is stop the refresh

        auth.createUserWithEmilAndPassword(email,password)
        .then((auth) => {
            history.push("/");

        })
        .catch(e => alert(e.message));
    
    }



    return (
        <div className = "login">
            <Link to="/">
            <img className="login__logo" src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange = {event => setEmail(event.target.value)} type="email"/>
             
                    <h5>Password</h5>
                    <input input = {password} type="password" oncChange = {event => setPassword(event.target.value)}/>
                    <button onClick = {login} type = "submit" className= "login__signInButton">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button onClick = {register} className="login__registerButton">create your Amazon Account</button>
                 
            </div>
           
            
        </div>
    )
}

export default Login
