import React from 'react';
import './navStyling.css';

const Navbar = () => {
    return(
        <nav>
            <div className='logo'>
                <h1>Vita Salon</h1>
            </div>
            <div className='nav-items'>
                <a herf='tel:2067832031' target='_blank' rel='noopener noreferrer'>Contact</a>
                <a herf='https://goo.gl/maps/5KFeMShkoquPxpMb8' target='_blank' rel='noopener noreferrer'>Location</a>
            </div>
        </nav>
    )
};

export default Navbar;