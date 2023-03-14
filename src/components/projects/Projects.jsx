import { Card } from './Card';
// Styles
import { SectionProjects } from "./Projects.styled"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FcBriefcase } from "react-icons/fc";

// Projects
import { projects } from "../../logic/Projects";



export function Projects() {


    return (
        <SectionProjects id="projects" >
            <div>
                <h3>
                    PROYECTOS
                    <FcBriefcase className="icono" />
                </h3>
            </div>

            <div className="card" >
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

