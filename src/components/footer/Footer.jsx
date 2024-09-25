import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';




function Footer() {

    return (


        <div className='footer-container'>


            <div className='footer-links'>
                <div className='footer-link-wrapper'>

                    <div className='footer-link-items'>
                        <h2>Om</h2>
                        <div className='p3'>Susanne Pennsäter</div>
                        <div className='p3'>Sweden, Skåne, Lund</div>
                        <div className='p3'>KBT-terapeut</div>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Kontakt</h2>
                        <div className='p3'>0702884886</div>
                        <div className='p3'>-@gmail.com</div>
                    </div>

                </div>

                <div className='footer-link-wrapper'>

                    <div className='footer-link-items'>
                        <h2>Rättigheter</h2>
                        <Link to='https://opensource-7d53e.web.app' target='_blank'>Open source</Link>
                        <Link to='https://mediainformation-ca3b9.web.app' target='_blank'>AI created media</Link>
                        <Link to='https://userinformation-76154.web.app' target='_blank'>ToS and PP</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Länkar</h2>
                        <Link to='https://www.linkedin.com/in/susanne-penns%C3%A4ter-2a0636138/' target='_blank'>LinkedIn</Link>
                        <Link to='' target='_blank'>Google business</Link>

                    </div>

                </div>
            </div>




            <section className='social-media'>
                <div className='social-media-wrap'>

                    <Link to='/' className='footer-logo' />

                    <small className='website-rights'>© 2024</small>

                    <div className='social-icons'>

                        <Link
                            className='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/susanne-penns%C3%A4ter-2a0636138/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>

                    </div>
                </div>
            </section>



        </div>
    );

}

export default Footer;