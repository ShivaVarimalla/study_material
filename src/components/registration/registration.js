import React from 'react';
import './registration.css'
import {useNavigate} from "react-router-dom";

//Registration functional component
const Registration = () => {
    const navigate = useNavigate();

    // Login method
    const onLogin = () => {
        navigate('/')
    }
    return (
        <div>
            <div>
                <div>Login & Signup Form</div>
            </div>
            <div className="wrapper">
                <div className="title-text">
                    <div className="title signup">Signup Form</div>
                </div>
                <div className="form-container">
                    <div className="form-inner">
                        <form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required/>
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required/>
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required/>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup"/>
                            </div>
                            <div className="signup-link">Already have an account? <a href="" onClick={onLogin}>Login now</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
