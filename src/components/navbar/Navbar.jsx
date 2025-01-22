import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { createContext } from 'react';
import $ from 'jquery';

export const ThemeContext = createContext(null);

function Navbar() {
    const loggedIn = false; // Change this based on your authentication logic
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1450);

    useEffect(() => {
        // Update isMobile state on window resize
        const handleResize = () => setIsMobile(window.innerWidth <= 1450);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // jQuery code for menu toggle
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log('Clicked menu');
            $('#mainListDiv').toggleClass('show_list');
            $('#mainListDiv').fadeIn();
        });

        return () => {
            $('.navTrigger').off('click');
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
            } else {
                $('.nav').removeClass('affix');
            }
        };

        $(window).on('scroll', handleScroll);
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleLinkClick = () => {
            $('.navTrigger').removeClass('active');
            $('#mainListDiv').removeClass('show_list');
        };

        $('#mainListDiv ul li a').on('click', handleLinkClick);
        return () => {
            $('#mainListDiv ul li a').off('click', handleLinkClick);
        };
    }, []);

    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <Link to="/" className="navbar-logo" />
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/FAQ">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/assistant">Assistant</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {isMobile && (
                            loggedIn ? (
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                </>
                            )
                        )}
                    </ul>
                    {!isMobile && (
                        <div className="auth-buttons">
                            {loggedIn ? (
                                <Link to="/logout">Logout</Link>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signup">Signup</Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </nav>
        </>
    );
}

export default Navbar;