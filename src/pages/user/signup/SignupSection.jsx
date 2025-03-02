import React from 'react';
import '../../../App.css';
import './SignupSection.scss';

import { useState, useEffect } from 'react';
import { auth } from '../../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom"

function SignupSection() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [user])

    return (

        <div className='signup-container'>

            {user ? <Navigate to="/profile" /> : <Navigate to="/signup" />}

            <div className='signup-form-container'>

                <div className='signup-form-header'>
                    Sign up
                </div>

                <div className='form-signup'>
                    <div className='signup-input-wrap'>
                        <div className='input-splitter-left'>
                            <div className='small-header-wrap-signup'>
                                First Name
                            </div>
                        </div>
                        <div className='input-splitter-right'>
                            <div className='small-header-wrap-signup'>
                                Last Name
                            </div>
                        </div>
                    </div>

                    <div className='signup-input-wrap'>
                        <div className='input-splitter-left'>

                            <input className='input-signup' type="text" name="firstname" />

                        </div>

                        <div className='input-splitter-right'>
                            <input className='input-signup' type="text" name="lastname" />
                        </div>
                    </div>

                    <div className='small-header-wrap-signup'>
                        Email
                    </div>
                    <div className='signup-input-wrap'>
                        <input className='input-signup' type="text" name="email" />
                    </div>

                    <div className='signup-input-wrap'>
                        <div className='input-splitter-left'>
                            <div className='small-header-wrap-signup'>
                                Password
                            </div>
                        </div>
                        <div className='input-splitter-right'>
                            <div className='small-header-wrap-signup'>
                                Confirm Password
                            </div>
                        </div>
                    </div>

                    <div className='signup-input-wrap'>
                        <div className='input-splitter-left'>

                            <input className='input-signup' type="text" name="password" />

                        </div>

                        <div className='input-splitter-right'>
                            <input className='input-signup' type="text" name="confpassword" />
                        </div>
                    </div>


                    <input className='signup-button cursor-pointer' type="submit" value="Sign up" />
                </div>

                <div className='signup-info-text'>
                    Please note: The form is not functional, this is only a demo!
                </div>

            </div>

        </div>

    )
}

export default SignupSection