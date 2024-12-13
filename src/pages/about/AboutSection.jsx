import React from 'react';
import '../../App.css';
import './AboutSection.scss';

function AboutSection() {
    return (

        <div className='about-container'>

            <div className='about-1-container'>

                <div className='left-about'>
                    <img src='/images/oig2.jpg' alt='cool im' />
                </div>

                <div className='right-about'>
                    I created an HR AI chatbot to streamline and improve access to HR-related information for employees in municipal and government-funded organizations. Many HR departments face challenges with repetitive questions, limited availability, and administrative workload, which can hinder efficiency. By offering an AI-powered chatbot, employees can quickly get answers to common queries 24/7, reducing response times and improving satisfaction. This solution allows HR teams to focus on more complex, value-driven tasks while ensuring consistent and reliable support for employees. Ultimately, the chatbot enhances communication, saves time, and contributes to a more efficient workplace.
                </div>
            </div>

        </div>

    )
}

export default AboutSection