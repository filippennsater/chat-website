import React from 'react';
import '../../App.css';
import './ServicesListItem.scss';
import { Link } from "react-router-dom";



function ServicesListItem(props) {
    return (

        <>
            <div className="serv-container">

                <img
                    src={props.image}
                    alt="smallWboi"
                    className="serv-image"
                />

                <div className="serv-right-container">
                    <div className="serv-header">
                        {props.title}
                    </div>
                        <Link className='serv-button-container' to={`/service/${props.id}`}>
                            <div className="serv-button">Mer information{/*&nbsp;&nbsp;<i className="fa-solid fa-play" />*/}</div>
                        </Link>
                        </div>

            </div>
        </>
    );
}

export default ServicesListItem