import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { createContext } from 'react';
import $ from 'jquery';

export const ThemeContext = createContext(null);

function Navbar() {
    
    const loggedIn = false; // Set to `true` for logged-in state, `false` for logged-out state. Hardcoded state to simulate login status

    useEffect(() => {
        // jQuery code
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        });

        // Cleanup function to remove event handlers
        return () => {
            $('.navTrigger').off('click');
        };
    }, []);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
            } else {
                $('.nav').removeClass('affix');
            }
        };

        // Add scroll event listener when component mounts
        $(window).on('scroll', handleScroll);

        // Clean up function to remove event listener when component unmounts
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        // Close the menu when a link is clicked
        const handleLinkClick = () => {
            $('.navTrigger').removeClass('active');
            $('#mainListDiv').removeClass('show_list');
        };

        $('#mainListDiv ul li a').on('click', handleLinkClick);

        // Clean up function to remove event handler when component unmounts
        return () => {
            $('#mainListDiv ul li a').off('click', handleLinkClick);
        };
    }, []);

    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <Link to='/' className='navbar-logo' />
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/FAQ'>FAQ</Link></li>
                        <li><Link to='/assistant'>Assistent</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <div className="auth-buttons">
                            {loggedIn ? (
                                // Show Logout button when logged in
                                <Link to="/logout">Logout</Link>
                            ) : (
                                // Show Login and Signup buttons when not logged in
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signup">Signup</Link>
                                </>
                            )}
                        </div>
                    </ul>
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