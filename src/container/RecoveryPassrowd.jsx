import React from 'react'


const RecoveryPassword = ()=>{
    return (
    <div className="login">
    <div className="form-container form-container__center ">
        <img className="logo" src="./assets/img/logos/logo_yard_sale.svg" alt="logo"/>
        <h2 className="title__form-contaier">Email has been send</h2>
        <p className="subtitle">Please check your inbox for instruccions on how to reset your password</p>
        <div className="email-image">
            <img src="./assets/img/logos/email.svg" alt="email"/>
        </div>
        <button className="primary-button">Login</button>

        <p className="resend">
            <span>Didn't recive the email </span><a href="/">resend</a>
        </p>
        
    </div>
</div>
)
}
export default RecoveryPassword