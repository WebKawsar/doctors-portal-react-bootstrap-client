import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar/Sidebar';



const DashboardAppointment = () => {


    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={5}>
                    
                </Col>
                <Col md={5}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardAppointment;