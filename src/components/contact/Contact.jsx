import { ContactContainer } from "./Contact.styled"

// Component
import { ContactForm } from "./Form";

function SectionContact() {
    return (
        <ContactContainer id="contact">
            <h1>Enviame un mail de contacto :</h1>

            <ContactForm />

        </ContactContainer>
    )
}

export default SectionContact;