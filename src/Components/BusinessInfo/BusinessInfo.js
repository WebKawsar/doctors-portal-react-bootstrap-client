import React from 'react';
import { Card, CardDeck, Container, Row } from 'react-bootstrap';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhoneAlt,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
            
                <Container>
                    <CardDeck>
                        {
                            infosData.map((info, index) => <BusinessInfoCard key={index} info={info}></BusinessInfoCard>)
                        }
                    </CardDeck>
                </Container>


    );
};

export default BusinessInfo;