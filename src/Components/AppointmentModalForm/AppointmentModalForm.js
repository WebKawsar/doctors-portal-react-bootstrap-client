import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AppointmentModalForm = ({show, handleClose, selectedDate}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        fetch('https://localhost:8080/addAppointment', {
            method: 'POST',
            body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then(response => response.json())
        .then(result => {

            console.log(result);
            handleClose();
        })

        
    }


    return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedDate.toDateString()}</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Control ref={register({ required: true })} name="name" size="lg" type="text" placeholder="Enter name" />
                                {
                                    errors.name && <Form.Text muted>
                                                        Name is required.
                                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control ref={register({ required: true })} name="email" size="lg" type="email" placeholder="Enter email" />
                                {
                                    errors.email && <Form.Text muted>
                                                        Email is required.
                                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control ref={register({ required: true })} name="phone" size="lg" type="number" placeholder="Enter phone number" />
                                {
                                    errors.phone && <Form.Text muted>
                                                        Phone number is required.
                                                    </Form.Text>
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Control ref={register({ required: true })} name="date" size="lg" type="date" placeholder="DD/MM/YYYY" />
                                {
                                    errors.date && <Form.Text muted>
                                                        Date is required.
                                                    </Form.Text>
                                }
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <input className="main-button" type="submit" value="SEND" />
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
    );
};

export default AppointmentModalForm;