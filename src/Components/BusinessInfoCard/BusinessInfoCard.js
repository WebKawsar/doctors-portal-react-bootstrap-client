import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import "./BusinessInfoCard.css";



const BusinessInfoCard = ({ info }) => {

  return (
            <>
                <Col md={4} className="p-0">
                    <Card>
                        <Row className={`info-card info-${info.background}`} noGutters>
                            <Col className="text-right mt-4" md={3}>
                                <FontAwesomeIcon style={{fontSize: "55px", color: "white"}} icon={info.icon} />
                            </Col>
                            <Col md={9}>
                                <Card.Body>
                                    <Card.Title>{info.title}</Card.Title>
                                    <Card.Text>
                                        {info.description}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </>  
            
  );
};

                    

export default BusinessInfoCard;
