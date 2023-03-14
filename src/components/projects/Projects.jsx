import { useEffect, useRef } from 'react';
import { Card } from './Card';
// Styles
import ScrollReveal from 'scrollreveal';
import { SectionProjects } from "./Projects.styled"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FcBriefcase } from "react-icons/fc";

// Projects
import { projects } from "../../logic/Projects";



export function Projects() {

    const animation = useRef(null);
    useEffect(() => {
        ScrollReveal().reveal(animation.current, {
            duration: 1000,
            opacity: 0,
            scale: 0.5,
            distance: '-15rem',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            viewFactor: 0.5,
        });

    }, [])

    return (
        <SectionProjects id="projects" ref={animation}>
            <div>
                <h3>
                    PROYECTOS
                    <FcBriefcase className="icono" />
                </h3>
            </div>

            <div className="card">
                {
                    projects.map(p => {
                        return (
                            <Card img={p.image} title={p.title} description={p.description} deployLink={p.deployLink}
                                codeLink={p.codeLink} key={p.deploy}
                            />

                        )
                    })
                }
            </div>
        </SectionProjects>


    );
}

