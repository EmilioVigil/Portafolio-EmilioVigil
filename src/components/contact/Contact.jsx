import { useEffect, useRef } from 'react';

// Style
import { ContactContainer } from "./Contact.styled"
import ScrollReveal from 'scrollreveal';

// Component
import { ContactForm } from "./Form";

function SectionContact() {
    const animation = useRef(null);
    useEffect(() => {
        ScrollReveal().reveal(animation.current, {
            duration: 1000,
            opacity: 0,
            scale: 0.5,
            distance: '50px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            viewFactor: 0.5,
        });

    }, [])
    return (
        <ContactContainer id="contact" ref={animation}>
            <h1>Enviame un mail de contacto :</h1>

            <ContactForm />

        </ContactContainer>
    )
}

export default SectionContact;