import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import AppointmentModalForm from '../AppointmentModalForm/AppointmentModalForm';



const BookingCard = ({bkData, selectedDate}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleModal = () => {
        setShow(true)
    };


    return (
        <Col md={4}>
            <Card className="text-center" style={{padding: "35px 0 25px", margin: "20px 5px"}}>
                <Card.Body>
                    <Card.Title className="text-brand" mb={3}>{bkData.subject}</Card.Title>
                    <Card.Subtitle mb={3} className="mb-2 text-muted">{bkData.visitingHour}</Card.Subtitle>
                    <Card.Text>
                        <small>{bkData.totalSpace} SPACES AVAILABLE</small>
                    </Card.Text>
                    <button  onClick={handleModal} className="main-button">Book Appointment</button>
                    
                    <AppointmentModalForm selectedDate={selectedDate} show={show} handleClose={handleClose}></AppointmentModalForm>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookingCard;