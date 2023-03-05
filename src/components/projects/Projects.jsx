// Styles
import { SectionProjects } from "./Projects.styled"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import prueba from '../../images/prueba.jpg'


// Projects
const projects = [
    {
        title: 'Weather App',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '',
        codeLink: ''
    }, {
        title: 'PokeApp',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '',
        codeLink: ''
    }, {
        title: 'Wine Supply',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '',
        codeLink: ''
    }, {
        title: 'Tic-Tac-Toe',
        description: 'Descripcion de prueba del componente',
        image: prueba,
        deployLink: '',
        codeLink: ''
    }
]

function Projects() {
    return (
        <SectionProjects>
            <h3>
                PROYECTOS
            </h3>
            <Carousel className='carousel-container' >
                {
                    projects.map(p => {
                        return (
                            <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={p.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
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

export default CarouselFadeExample;