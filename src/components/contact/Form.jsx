// STYLE
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SectionForm } from './Form.styled';
import { FcCheckmark } from "react-icons/fc";

// React
import { useRef, useState } from 'react';

// Logica
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5et7st1', 'template_fjtwll5', e.target, 'DMXldINZi6VDBU3py')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Reiniciamos el form
        form.current.reset();

        // Llamamos la modal
        handleShow();
    };

    return (
        <SectionForm>
            <Form ref={form} onSubmit={sendEmail} className="form-container">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="name@example.com" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" required />
                </Form.Group>

                <Button variant="outline-primary" type="submit" value="Send" className='form-btn' >Enviar</Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Mensaje enviado
                        <FcCheckmark />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </SectionForm>
    );
};

