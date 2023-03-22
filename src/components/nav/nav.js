import React from 'react';
import {useNavigate} from "react-router-dom";

// Nav functional component
const Nav=()=> {
    const navigate = useNavigate()
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Edwisely</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div style={{paddingRight: '20px'}}>Shiva Shankar Reddy</div>
                        <form className="d-flex">
                                <button onClick={()=>navigate('/')} className="btn btn-danger" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
