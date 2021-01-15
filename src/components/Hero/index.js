import React from 'react';
import './heroStyling.css';
import store from '../images/vitaFront.png';

const Hero = () => {
    return(
        <div className='hero-section'>
            <div className='hero-section__background'>
                <img className="hero-section__image" src={store} alt='store front' /> 
            </div>
            <div className='content'>
                <h1 className='hero-section__title'>Welcome to Vita Beauty Salon</h1>
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
        </div>
    )
}

export default Hero;