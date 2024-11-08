import React from 'react';
import '../../App.css'
import './HomeSection.scss';


function HomeSection() {


    return (

        <div className='hero-container'>
            {/*<video className='vid' src='/videos/duck.mp4' autoPlay loop muted />*/}

            <div className='selfie-container'>
                <figure className="home-self" />
            </div>
            <div className='intro-text'>
                <h1>Your Virtual Assistant for HR and Healthcare Services</h1>
            </div>
        </div>
    )
}

export default HomeSection