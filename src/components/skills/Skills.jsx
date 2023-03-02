import { SectionSkills } from "./Skills.styled"
import { DiJsBadge, DiBootstrap, DiCss3, DiHtml5, DiMongodb, DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { SiRedux, SiSass } from 'react-icons/si';
export function Skills() {



    return (
        <SectionSkills id="skills">
            <div className="sec-skills-title">
                <h3>Tecnologias con las que he trabajado</h3>
            </div>

            <div className="sec-skills-icon">
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