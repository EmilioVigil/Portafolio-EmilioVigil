// Styles
import { SectionProjects } from "./Projects.styled"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import prueba from '../../images/prueba.jpg'
import { FcBriefcase } from "react-icons/fc";

// Projects
const projects = [
    {
        title: 'Weather App',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '1',
        codeLink: ''
    }, {
        title: 'PokeApp',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '2',
        codeLink: ''
    }, {
        title: 'Wine Supply',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '3',
        codeLink: ''
    }, {
        title: 'Tic-Tac-Toe',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '4',
        codeLink: ''
    }
]

export function Projects() {
    return (
        <SectionProjects id="projects">
            <div>
                <h3>
                    PROYECTOS
                    <FcBriefcase className="icono" />
                </h3>
            </div>

            <Carousel className='carousel-container' >
                {
                    projects.map(p => {
                        return (
                            <Carousel.Item className="carousel-item" key={p.deployLink}>
                                <img
                                    className="d-block w-100"
                                    src={p.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="carousel-description" >
                                    <h3>{p.title}</h3>
                                    <p>{p.description}</p>
                                    <div>
                                        <button><a href={p.deployLink} >Deploy</a></button>
                                        <button><a href={p.codeLink} >Código</a></button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

        </SectionProjects>

    );
}

