import React from 'react'
import './style.css'

const Navbar = () => {
    return ( 
        <>
        <div className="navigation">
            <div className="nav-left">
                <div className="logo"></div>
            </div>
            <div className="nav-right">
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>FAQ</p>
            </div>
        </div>
        </>
    );
}

export default Navbar;