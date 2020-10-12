import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppointmentMain from '../Components/AppointmentMain/AppointmentMain';
import BookingAppointment from '../Components/BookingAppointment/BookingAppointment';
import Header from '../Components/Header/Header';
import "./Appointment.css";



const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div className="appointment-section">
            <Container fluid>
                <Header></Header>
                <AppointmentMain handleDateChange={handleDateChange}></AppointmentMain>
                <BookingAppointment selectedDate={selectedDate}></BookingAppointment>
            </Container>
        </div>
        
    );
};

export default Appointment;