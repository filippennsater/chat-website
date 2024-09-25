import React from 'react';
import '../../App.css';
import './ServicesListSection.scss';

import ServiceListItem from '../../components/serviceComponents/ServicesListItem';
import { services } from '../../components/serviceComponents/Services';

function ServicesListSection() {
    return (

        <div className='servicesList-container'>

            <div className='servicesList-header'>Tjänster</div>

            {services.map(service => (
                <ServiceListItem 
                    key={service.id} 
                    id={service.id}
                    image={service.image} 
                    title={service.title} 
                    guest={service.guest}
                    description={service.description}
                />
            ))}

        </div>

    )
}

export default ServicesListSection