import React, { useState, useEffect } from 'react';
import { FaUser, FaCode, FaLaptop, FaEnvelope, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import {
    SidebarWrapper,
    CloseButton,
    NavItem,
    Icon,
    ToggleButton
} from './Responsive.styled'

export function NavBarResponsive() {

    const [isOpen, setIsOpen] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        setIsFirstRender(true);
    }, []);

    return (
        <>

            {isFirstRender && (
                <ToggleButton onClick={toggleNavbar}>
                    {isOpen ? '' : <FaBars size={24} />}
                </ToggleButton>
            )}

            <SidebarWrapper isOpen={isOpen}>
                <CloseButton onClick={toggleNavbar}>
                    <IoMdClose size={24} />
                </CloseButton>
                <NavItem >
                    <Icon>
                        <FaUser />
                    </Icon>
                    <a href="#home" onClick={toggleNavbar}  >Sobre Mi</a>
                </NavItem>
                <NavItem>
                    <Icon>
                        <FaCode />
                    </Icon>
                    <a href="#skills" onClick={toggleNavbar}  >Tecnologías</a>
                </NavItem>
                <NavItem>
                    <Icon>
                        <FaLaptop />
                    </Icon>
                    <a href="#projects" onClick={toggleNavbar} >Proyectos</a>
                </NavItem>
                <NavItem>
                    <Icon>
                        <FaEnvelope />
                    </Icon>
                    <a href="#contact" onClick={toggleNavbar} >Contacto</a>
                </NavItem>
            </SidebarWrapper>

        </>
    )
}

