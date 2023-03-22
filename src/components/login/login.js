import React, {useState} from "react";

import "./login.css";
import {useNavigate} from "react-router-dom";

// Login functional component
function Login() {
    const navigate = useNavigate();

    // SignUp method
    const onSignup=()=>{
        navigate('/signup')
    }
    // accessToBoard method
    const accessToBoard=()=>{
        navigate('/dashboard')
    }
    return (
        <div>
            <div>
                <div>Login & Signup Form</div>
            </div>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Login Form</div>
                </div>
                <div className="form-container">
                    <div className="form-inner">
                        <form action="#" className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required/>
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required/>
                            </div>
                            <div className="pass-link"><a href="#">Forgot password?</a></div>
                            <div onClick={accessToBoard} className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login"/>
                            </div>
                            <div className="signup-link">Not a member? <a href="" onClick={onSignup}>Signup now</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
