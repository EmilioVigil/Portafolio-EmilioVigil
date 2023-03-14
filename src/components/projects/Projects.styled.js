import styled from 'styled-components'


const SectionProjects = styled.section`
    
    padding: 4rem;
    h3{
        display: flex;
        font-size: 3rem;
        padding: 2rem 0;
        color : #521C56;
        align-items: center;
        justify-content: center;
        
        .icono{
            margin-left: 1rem;
        }

    }

    
    .card{
        border: none;
        display : flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width : 768px){
        h3{
            text-align: center;
        }

    }

    
`

export { SectionProjects }