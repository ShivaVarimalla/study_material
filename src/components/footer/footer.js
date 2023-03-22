import React from 'react';

//Footer functional component
const Footer=()=> {
    const fullYear = new Date().getFullYear()
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © {fullYear} Copyright:
                <a className="text-reset fw-bold" href="https://www.edwisely.com/">Edwisely</a>
            </div>
        </footer>

    );
}
export default Footer;
