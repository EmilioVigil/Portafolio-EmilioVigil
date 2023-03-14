import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowDownward } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";


export function NavBarResponsive() {

    // STATE
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <NavContainer>
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
                        <MdArrowDownward />
                    </button >

            }
        </NavContainer>
    )
}

const NavContainer = styled.div`
    display : none;
    

    .nav-bar-btn-responsive{
        border : none;
        padding : .5rem;
        margin-right: 1rem;
        width: 3rem;
        color : black;
        background-color: transparent;
        font-size : 2rem;
        position: absolute;
        right: 0;
    }

    @media (max-width : 768px){   
        width: 100%;
        display: block;
        position : absolute;
        padding-bottom: 2rem;

        .nav-container-responsive{
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            ul{
                list-style: none;
                
                li{
                    padding : 1rem;
                }
            }
            transition: 1s all;
        }
        


        .nav-bar-btn-x-responsive{
            /* padding: 1rem; */
            color : red;
            border : none;
            background-color: transparent;
            font-size: 2rem;
            position: absolute;
            right: 0;
            top : 0;
        }

    }



`