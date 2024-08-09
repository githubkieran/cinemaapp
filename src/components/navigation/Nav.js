import React from "react";
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="navWrapper">
                <div className="nav-left">
                    <a href="#about">About</a>
                    <a href="#movies">Movies</a>
                    <a href="#menu">Menu</a>
                    <a href="#location">Location</a>
                </div>
                <div className="nav-center">
                    <h1>Cinema App</h1>
                </div>
                <div className="nav-right">
                    <a href="#signin">Sign In</a>
                    <a href="#signup">Sign Up</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
