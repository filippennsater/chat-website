import React from 'react';
import '../../App.css';
import './ServiceSection.scss';
import { Link } from "react-router-dom";


import { useParams } from 'react-router-dom';
import { services } from '../../components/serviceComponents/Services';

function ServiceSection() {
    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));

    if (!service) {
        return <div>Service not found</div>;
    }

    return (


        <div className='service-container'>

            <div className='service-info-container'>

                <div className='service-left-container'>

                    <div className='service-picture-container'>
                        <img
                            src={service.image}
                            alt={service.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className='service-name-container'>
                        {service.guest}
                    </div>

                </div>

                <div className='service-right-container'>

                    <div className='service-info-head-container'>
                        {service.title}
                    </div>
                    <div className='service-info-text-container'>
                        {service.description}
                    </div>
                    <Link className='sserv-button-container' to="">
                        <div className="sserv-button" >Boka tid här</div>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ServiceSection;