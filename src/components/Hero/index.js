import React from 'react';
import './heroStyling.css';
import barber from '../images/barber.svg';

const Hero = () => {
    return(
        <div className='hero-container'>
            <div className='column-left'>
                <h1>Welcome to Vita Beauty Salon</h1>
                <p>Serving you in the heart of Greenwood </p>
                <p className='hero-info'> 
                326 NW 85th St
                <br />
                Seattle, WA 98117
                <br />
                (206) 783 - 2031
                </p>
                <p>Call to schedule an appointment!</p>
                {/* <button>Contact Us for an Appointment!</button> */}
            </div>
            <div className='column-right'>
                <img src={barber} alt='barber'></img>
            </div>
        </div>
    )
}

export default Hero;