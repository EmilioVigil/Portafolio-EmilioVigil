import { SectionSkills } from "./Skills.styled"
import { DiJsBadge, DiBootstrap, DiCss3, DiHtml5, DiMongodb, DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { SiRedux, SiSass } from 'react-icons/si';

import ScrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';


export function Skills() {
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
        <SectionSkills id="skills">
            <div className="sec-skills-title">
                <h3>Tecnologias con las que he trabajado</h3>
            </div>

            <div className="sec-skills-icon" ref={animation}>
                <div className="sec-skills-container">
                    <DiJsBadge className="sec-icon" />
                    <DiReact className="sec-icon" />
                    <DiNodejs className='sec-icon' />
                    <DiMongodb className='sec-icon' />
                    <DiPostgresql className='sec-icon' />
                    <DiHtml5 className='sec-icon' />
                    <DiCss3 className='sec-icon' />
                    <SiSass className='sec-icon' />
                    <DiBootstrap className='sec-icon' />
                    <SiRedux className="sec-icon" />
                </div>
            </div>
        </SectionSkills>
    )
}