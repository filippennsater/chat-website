import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './IntroSection.scss';

function IntroSection() {

  return (
    <div className='intr-container'>
      <div className='intrc-container'>
        <div className='intr-text-container'>
          <div className='intrctext'>
            Hello and welcome!
            <br /><br/>
            I am your virtual HR assistant, designed to quickly and efficiently answer your questions about personnel matters and employment law.<br/>My role is to simplify your workday by providing accurate and up-to-date responses, whether it's about employment conditions, leave requests, or other HR-related topics.
            <br/>
            I’m available around the clock to help you find the right information instantly, allowing you to focus on supporting your employees and developing your organization.
            <br /><br/>
            Don’t hesitate to ask – I’m here to assist you.

          </div>
        </div>
        <div className='intr-image-container'>

        </div>
      </div>
    </div>
  );
}

export default IntroSection;