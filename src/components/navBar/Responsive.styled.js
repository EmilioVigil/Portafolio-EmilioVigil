import styled, { css } from 'styled-components';


const NavContainer = styled.div`
    display : none;
    

    .nav-bar-btn-responsive{
        border : none;
        padding : .5rem;
        margin-right: 1rem;
        width: 3rem;
        color : black;
        background-color: transparent;
        font-size : 2rem;
        position: absolute;
        right: 0;
    }

    @media (max-width : 768px){   
        width: 100%;
        display: block;
        position : absolute;
        padding-bottom: 2rem;

        .nav-container-responsive{
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;

            
            ul{
                list-style: none;
                
                li{
                    padding : 1rem;
                }
            }

        }
        


        .nav-bar-btn-x-responsive{
            color : red;
            border : none;
            background-color: transparent;
            font-size: 2rem;
            position: absolute;
            right: 0;
            top : 0;
        }

    }
`

export { NavContainer }
