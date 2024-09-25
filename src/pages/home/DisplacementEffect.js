import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './DisplacementEffect.css';

const DisplacementEffect = ({ trigger }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      gsap.fromTo(circleRef.current, {
        attr: { r: 0 },
      }, {
        attr: { r: 300 },
        duration: 3,
        ease: 'power3.inOut',
      });
    }
  }, [trigger]);

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <mask id="circleMask">
          <circle ref={circleRef} cx="200" cy="200" r="0" fill="white" className="displacement" />
        </mask>
      </defs>
    </svg>
  );
};

export default DisplacementEffect;