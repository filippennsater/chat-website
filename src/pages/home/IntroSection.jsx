import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './IntroSection.scss';
import DisplacementEffect from './DisplacementEffect';

function IntroSection() {
  const [trigger, setTrigger] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && observer.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className='intr-container' ref={sectionRef}>
      <DisplacementEffect trigger={trigger} />
      <div className='intrc-container'>

        <div className='intr-circle-container'>
          <div className='intr-circle' style={{ mask: 'url(#circleMask)', WebkitMask: 'url(#circleMask)' }} />
        </div>
        
        <div className='intr-text-container'>
          <div className='intrctext'>
            Välkommen till min hemsida! Jag heter Susanne Pennsäter och är KBT-terapeut. Här kan du få hjälp med att hantera stress, ångest, depression och andra livsutmaningar genom kognitiv beteendeterapi (KBT). Jag erbjuder individuella samtal anpassade efter dina unika behov och mål. Utforska sidan för mer information om mina tjänster och hur vi tillsammans kan arbeta för ditt välbefinnande.
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroSection;