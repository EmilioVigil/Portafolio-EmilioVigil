import { Home } from './Home.styled.js';

import { useEffect, useRef } from 'react';

import pic from '../../images/developer.svg';
import CV from '../../assets/EmilioVigilCv.pdf'
import ScrollReveal from 'scrollreveal';

import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";

export function SectionHome() {

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
        <Home id="home" >
            <div className="home-cta" ref={animation} >
                <div className='home-title'>
                    <h2>¡Hola!</h2>
                    <h1>Soy Emilio Vigil</h1>
                    <h3>Full Stack Developer</h3>
                </div>
                <div className='home-icon-profile'>
                    <a href="https://github.com/EmilioVigil" target={'_blank'}>
                        {/* ICONO */}
                        <GoMarkGithub />

                    </a>
                    <a href="https://www.linkedin.com/in/emilio-vigil-b764201a1/" target={'_blank'}>
                        {/* ICONO */}
                        <ImLinkedin />

                    </a>
                    <a href={`${CV}`} download>
                        <button className='btn-dowload'>Descargar CV</button>
                    </a>
                </div>
                <div className='home-description'>
                    <h3 >Un poco sobre mi</h3>
                    <p>Soy un apasionado por el mundo de la programacion, estoy con muchas energias para afrontar nuevos desafios  y crecer personalmente como Desarrollador Full Stack.
                        Actualmente estoy en busqueda laboral para poder brindar mi conocimiento y sobre todo seguir aprendiendo, pero mientras tanto me mantengo realizando proyectos personales.
                    </p>
                </div>

            </div>

            <div className='home-image'>
                <img src={pic} alt="pic-developer" />
            </div>





        </Home >
    )
}