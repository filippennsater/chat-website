import React from 'react';
import '../../App.css';
import './AboutSection.scss';

function AboutSection() {
    return (

        <div className='about-container'>

            <div className='cards-container'>

                <div className='info-card1'>
                    <div className='header-container'>
                        {/*<div className='about-header'>OM</div>*/}
                    </div>
                    <div className='about-text'>Efter att ha arbetat inom företagshälsovård i över 20 år och sett det ökande behovet av individanpassad behandling, kände jag en stark drivkraft att starta en egen klinik för att kunna erbjuda skräddarsydd kognitiv beteendeterapi och familjeterapi.<br />Mitt mål är att skapa en trygg och stödjande miljö där klienter kan få den hjälp de behöver för att hantera livets utmaningar.</div>
                </div>
                <div className='info-card2'>
                    <div className='about-text'>Jag har över 20 års erfarenhet av behandling och samtal, samt omfattande erfarenhet av arbetsplatsrelaterad problematik inom företagshälsovård. <br /><br />Jag arbetar med evidensbaserad kognitiv beteendeterapi (KBT) och familjeterapi (IBCT), samt med utredning och bedömning av konflikter, svåra samtal, kränkningsanmälningar och arbetsförmågebedömningar.</div>
                </div>
                <div className='info-card3'>
                </div>
                <div className='info-card4'>
                    <div className='header-container'>
                        <div className='about-header'>CV</div>
                    </div>
                    <ul>
                        <li className='about-text'>KBT-steg 1 Psykologpartners</li>
                        <li className='about-text'>IBCT Psykologpartners</li>
                        <li className='about-text'>ICF- Karolinska institutet, arbetsförmågebedömning</li>
                        <li className='about-text'>Medicinskt ledningsansvar, Sveriges företagshälsovårds förening</li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default AboutSection