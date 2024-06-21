import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="askmeidentity_logo.png" alt="AskMeIdentity Logo" />
            </div>
            <div className="nav-items">
                <div className="nav-item">Services</div>
                <div className="nav-item">Training</div>
                <div className="nav-item">Consultant</div>
                <div className="nav-item">Blog</div>
                <div className="nav-item">About</div>
                <button>Contact</button>
            </div>
        </div>
    );
}

export default Navbar;
