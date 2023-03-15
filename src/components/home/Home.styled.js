import styled from 'styled-components';


const Home = styled.section`
    padding: 10rem 8rem;
    height: 100%;
    width : 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F8FF;
    
    
    .home-cta{
        .home-title{ 
            font-size: 2rem;
            h1 ,h2, h3{
                margin: 0 0 1rem;
            }
            h3{
                color: rgb(70 , 0 , 57);;
            }
        }
    
        .home-description{
            h3{
                font-size: 1.7rem;
                margin-top: 4rem;
                padding-bottom: 1rem;
            }

            p{
                font-size: 1.5rem;

            }

        }
    }

    .home-image{
        img{
            width: 750px;
        }
    }

    .home-icon-profile{
        display: flex;
        align-items: center;
        
        .btn-dowload{
            font-size: .8rem;
            color: white;
            border:none;
            padding: 0.3rem 2rem;
            border-radius: .25rem;
            background-color: rgb(70 , 0 , 57);
            cursor: pointer;
            transition: .5s;
            
            &:hover{
                background-color: white;
                color: black;
                border: 1px solid  rgb(70 , 0 , 57);
            }

        }

        a{
            font-size: 1.8rem;
            margin-right: 1rem;
            width: 1rem;

            
        }
    }

    @media (max-width : 768px){

        padding: 2rem;
        text-align: center;
        
        .home-title{
            margin-top: 5rem;
        }

        .home-image{
            display: none;
        }

        .home-cta{
            .home-icon-profile{
                justify-content: center;
            }
        }
        


    }


`


export { Home }