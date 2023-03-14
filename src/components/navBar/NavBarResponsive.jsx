import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// Style
import { NavContainer } from './Responsive.styled'

export function NavBarResponsive() {

    // STATE
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <NavContainer >
            {
                show ?
                    <nav className='nav-container-responsive'>
                        <button onClick={handleClose} className="nav-bar-btn-x-responsive">
                            <AiOutlineClose />
                        </button>
                        <ul>
                            <li>
                                <a href="#home" onClick={handleClose} >Sobre Mi</a>
                            </li>
                            <li>
                                <a href="#skills" onClick={handleClose} >Tecnologías</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleClose} >Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleClose} >Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    :
                    <button onClick={handleShow} className="nav-bar-btn-responsive" >
                        <AiOutlineMenu />
                    </button >

            }
        </NavContainer>
    )
}

