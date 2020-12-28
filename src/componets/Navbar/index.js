import React from 'react';
import '/navStyling.css';

const Navbar = () => {
    return(
        <nav>
            <div className='logo'></div>
            <div className='nav-items'>
                <a herf='/'>Contact</a>
                <a herf='/'>Location</a>
            </div>
        </nav>
    )
};

export default Navbar;