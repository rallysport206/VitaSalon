import React from 'react';
import './heroStyling.css';
import store from '../images/vitaFront.png';

const Hero = () => {
    return(
        <div className='hero-container'>
            <div className='column-left'>
                <h1>Welcome to Vita Beauty Salon</h1>
                <p>Serving you in the heart of Greenwood </p>
                <p className='hero-info'><a href='https://goo.gl/maps/5KFeMShkoquPxpMb8' target='_blank' rel='noopener noreferrer'>
                326 NW 85th St
                <br />
                Seattle, WA 98117
                <br />
                </a>
                <a href='tel:2067832031' target='_blank' rel='noopener noreferrer'>(206) 783 - 2031</a>
                </p>
                <p>Call to schedule an appointment!</p>
                {/* <button>Contact Us for an Appointment!</button> */}
            </div>
            <div className='column-right'>
                {/* <img src={store} alt='barber' className='hero-image'></img> */}
            </div>
        </div>
    )
}

export default Hero;