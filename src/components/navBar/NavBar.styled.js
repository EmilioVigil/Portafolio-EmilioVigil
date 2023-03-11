import styled from 'styled-components'

const NavContainer = styled.header`
    position : fixed;
    width: 100%;
    display : flex;
    z-index: 10;
    
    nav{
        width: 100%;
        display : flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    

    .active{
           color: #460039;
           border-bottom: 2px solid #460039;
           transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;
           animation: click 0.3s ease-in-out;

        @keyframes click {
            0% {
               transform: scale(1);
           }
           50% {
               transform: scale(0.9);
           }
           100% {
               transform: scale(1);
           }
        }
            
        }
    
    nav a{
        text-decoration: none;
        color: black;
        margin-right: 5rem;
        font-size: 1.3rem;
        font-weight: 600;
    }


    .logo{
        padding: 0;
        width: 3rem;
        margin-left: 20px;
        svg{
            color : rgb(70 , 0 , 57);
            width: 2rem;
            height: 5rem;
            margin-top: 0 ;
        }

        &:hover a svg{
            transform: rotate(360deg);
        }

        a svg{
              transform-origin: center center;
              transition: transform 0.8s ease-in-out;
        }
        
    }

    .nav-responsive{
        display : none;
    }


    @media (max-width : 768px){
        .nav-links{
            display : none;
        }
    }


  
  `






export { NavContainer }