import styled from 'styled-components';


const Footer = styled.footer`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .lin{
            color : #0A66C2;
        }
        .ig{
            color : rgb(222,91,113);
        }
        .tw{
            color : #1D9BF0;
        }

    @media (max-width : 768px){
        width: 100%;
    }
`


export { Footer }