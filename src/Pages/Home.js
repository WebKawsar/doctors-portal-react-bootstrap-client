import React from 'react';
import { Container } from 'react-bootstrap';
import BusinessInfo from '../Components/BusinessInfo/BusinessInfo';
import Header from '../Components/Header/Header';
import Intro from '../Components/Intro/Intro';
import "./Home.css";


const Home = () => {

    return (
        <div className="home-page">
            <Container fluid>
                <Header></Header>
                <Intro></Intro>
                <BusinessInfo></BusinessInfo>
            </Container>
        </div>
        
    );
};

export default Home;