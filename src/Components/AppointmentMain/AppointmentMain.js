import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./AppointmentMain.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import image from "../../doctors-portal-resources/images/introImage.png";

const AppointmentMain = ({handleDateChange}) => {


    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>Appointment</h2>
                    <Calendar
                        className="calendar"
                        onChange={handleDateChange}
                        value={new Date()}
                        next2Label={null}
                        prev2Label={null}
                    />
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src={image} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentMain;