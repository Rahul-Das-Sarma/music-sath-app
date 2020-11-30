import React from 'react';
import './login.css';
import {login_url} from '../../spotify';

const Login = () => {
return(<div className= "login-container">
    <h1 className="brand-music-logo">MusicSath</h1>
    <p style={{margin: "0"}}>powered by spotify</p>

<a href={login_url}> <button className="btn-primary btn-login">Login</button> </a>
</div>)
}



export default Login;