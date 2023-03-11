import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import styled from 'styled-components';

import { MdOutlineWaves, MdArrowDownward } from "react-icons/md";

export function NavBarResponsive() {
    // menu responsive
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <NavContainer>
            <button onClick={handleShow} className="nav-bar-btn-responsive" >
                <MdArrowDownward />
            </button >

            <Offcanvas show={show} onHide={handleClose} placement='top' className={show ? 'nav-bar-responsive' : ''} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Portafolio Emilio Vigil</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <a href="#home" >Sobre Mi</a>
                        </li>

                        <li>
                            <a href="#skills" >Tecnologías</a>
                        </li>

                        <li>
                            <a href="#projects" >Proyectos</a>
                        </li>

                        <li>
                            <a href="#contact" >Contacto</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </NavContainer>
    )
}

const NavContainer = styled.header`
    display : none;
    
    .nav-bar-btn-responsive{
        border : none;
        padding : .5rem;
        margin-right: 1rem;
        width: 3rem;
        color : black;
        background-color: transparent;
        font-size : 2rem;
    }

    @media (max-width : 768px){
        display: flex;
        align-items: flex-end;
        justify-content: end;
        width: 100%;
        padding-bottom: 2rem;

    }



`