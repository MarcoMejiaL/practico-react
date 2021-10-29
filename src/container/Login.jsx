import React from 'react';
import '../styles/global.css'



const Login = ()=>{
    return(
        <div className="login">
        <div className="form-container">
            <img className="logo" src="./assets/img/logos/logo_yard_sale.svg" alt="logo"/>            
            <form className="from" action="/">
            <label className="label " for="email">Email Adress</label>
            <input type="text" id="email" placeholder="youracount@example.com" className="input input-email "/>
            <label className="label" for="password">Password</label>
            <input type="password" id="password" placeholder="************" className="input input-password "/>
            <input type="submit" value="Login" className="primary-button login-button"/>
            <p className="forgot"><a href="">Forgot my password</a></p>
            </form>
            <button className="secondary--button">Sign up</button>
           
        </div>
    </div>

    )
}
export default Login;