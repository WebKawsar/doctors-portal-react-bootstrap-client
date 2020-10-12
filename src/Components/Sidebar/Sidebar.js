import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faGripHorizontal, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';



const Sidebar = () => {

    return (

        <div className="sidebar-section">
            <ListGroup as="ul" className="d-flex flex-column justify-content-between col-md-2 py-5 px-4">
                
                    <ListGroup.Item as="li">
                        <Link to="/doctor/dashboard"><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashborad</span></Link>
                    </ListGroup.Item>
                
                <Link to="/doctor/appointment">
                    <ListGroup.Item><FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span></ListGroup.Item>
                </Link>
                <Link to="/doctor/patients">
                    <ListGroup.Item><FontAwesomeIcon icon={faGripHorizontal} /> <span>Patients</span></ListGroup.Item>
                </Link>
                <Link to="/doctor/prescriptions">
                    <ListGroup.Item><FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span></ListGroup.Item>
                </Link>
                <Link to="/doctor/setting">
                    <ListGroup.Item><FontAwesomeIcon icon={faCog} /> <span>Settings</span></ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    );
};

export default Sidebar;