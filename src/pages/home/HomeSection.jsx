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
                <div className='h1-container'>Your Virtual Assistant for HR and Healthcare Services</div>
            </div>
        </div>
    )
}

export default HomeSection