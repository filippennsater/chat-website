import React, { useEffect, useState } from 'react';
import '../../App.css';
import './AboutSection.scss';
import aboutData from './aboutData.json';

function AboutSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from aboutData.json
        setData(aboutData);
    }, []);

    return (
        <div className='about-container'>
            {data.map((item, index) => (
                <div key={index} className='about-1-container'>
                    <div className='left-about'>
                        <img src={item.picture} alt={`about-pic-${index}`} />
                    </div>
                    <div className='right-about'>
                        {item.text}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutSection;