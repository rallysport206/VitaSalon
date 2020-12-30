import React from 'react';
import './heroStyling.css';

const Hero = () => {
    return(
        <div className='hero-container'>
            <div className='column-left'>
                <h1>Vita Salon</h1>
                <p>Styling people's hair since 1999!</p>
                <button>Contact Us for an Appointment!</button>
            </div>
            <div className='column-right'>
                {/* <img src= alt='image'></img> */}
            </div>
        </div>
    )
}

export default Hero;