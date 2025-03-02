import React from 'react';
import '../../../App.css';
import './LogoutSection.scss';

function LogoutSection() {

    //to remove the local data for the user
    localStorage.removeItem('userData');

    return (

        <div className='logout-container'>
            <div className='logout-header-container'>
                <div className='logout-header'>
                    You have logged out!
                </div>
            </div>
        </div>

    )
}

export default LogoutSection