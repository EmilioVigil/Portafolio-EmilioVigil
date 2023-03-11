import styled from 'styled-components';



const MainPrincipal = styled.main`
   
    *{
        font-family: 'Poppins', sans-serif;
        
    }

    .content-container {
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.content-container.animate {
  transform: translateX(0%);
  opacity: 1;
}
    
`

export { MainPrincipal }