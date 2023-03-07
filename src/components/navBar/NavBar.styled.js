import styled from 'styled-components'

const Nav = styled.nav`
    position : fixed;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    z-index: 10;
    .logo{
        display: flex;
        flex: 1;
        padding: 0;
        margin-left: 20px;
        svg{
            color : rgb(70 , 0 , 57);
            width: 2rem;
            height: 5rem;
            margin-top: 0 ;
        }
    }

    a{
        color : black;
        text-decoration: none;
        margin-right: 5rem;


    }

    .links{
        position: absolute; 
        top : -700px;
        left: -2000px;
        right: 0;
        margin-left : auto;
        margin-right: auto;
        text-align: center;
        
        a{
            
            font-size: 2rem;
            display : block;
            font-weight: 600;   
            transition: font-size .5s;

            &:hover{
                color: rgb(70 , 0 , 57);

                text-decoration: underline;
            }

        }

       
        
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            display : inline;
            }
        }


    }

    .active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top : 30%;
        left: 0;
        right: 0;
        
        a{
        font-size: 2rem;
        color : black;
        margin-top: 1rem;
        }
    } 
    
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }

  
  `


const BgDiv = styled.div`
    position: absolute;
    top: -1000px;
    left : -1000px;
    transition: all .6s ease;
    &.active{
        top: 0;
        left : 0;
        width : 100%;
        height: 100%;
        z-index: -1;
        border-radius: 0 0 80% 0;
    }
`


export { Nav, BgDiv }