import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import introImage from "../../doctors-portal-resources/images/introImage.png";
import "./Intro.css";

const Intro = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push("/appointment")
    }
    return (
        <Row style={{padding: "120px 0"}}>
            <Col md={6}>
                <Container className="w-75">
                    <h1 className="mb-4" style={{color: "#223249", fontWeight: "bold", fontSize: "55px", lineHeight: "1.3em"}}>Your New Smile <br/> Starts Here</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae at a, assumenda dolore quis cumque amet enim earum animi molestias obcaecati delectus praesentium fugit repellat veniam nemo facere repudiandae in quibusdam vel. Repellat.</p>
                    <button onClick={handleClick} className="main-button">GET APPOINTMENT</button>
                </Container>
            </Col>
            <Col md={6}>
                <img className="img-fluid" src={introImage} alt=""/>
            </Col>
        </Row>
    );
};

export default Intro;