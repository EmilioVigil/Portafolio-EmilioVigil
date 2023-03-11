import { RedesDiv } from "./Redes.styled"
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineLinkedin } from "react-icons/ai";


export function SectionRedes() {
    return (
        <RedesDiv>
            <h3>Podes seguirme es mis redes</h3>
            <div className="icon-redes">
                <a href="https://www.linkedin.com/in/emilio-vigil-b764201a1/" target={"_blank"} >
                    <AiOutlineLinkedin className="lin" />

                </a>
                <a href="https://www.instagram.com/emi.vigil/" target={"_blank"}>
                    <AiFillInstagram className="ig" />

                </a>
                <a href="https://twitter.com/Emivigil17" target={"_blank"}>
                    <AiFillTwitterCircle className="tw" />
                </a>
            </div>
        </RedesDiv>
    )
}