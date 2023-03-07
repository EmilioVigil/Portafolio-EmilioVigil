import styled from 'styled-components'


const SectionProjects = styled.section`
    
    padding: 4rem;

    h3{
        display: flex;
        font-size: 3rem;
        padding-bottom: 4rem;
        color : #521C56;
        align-items: center;
        justify-content: center;
        
        .icono{
            margin-left: 1rem;
        }

    }

    .carousel-container{
        margin : auto;
        width: 50rem;

        .carousel-item{
            height: 40rem;
            
            img{
                background-color: transparent;
            }

            h3{
                padding-bottom: 1rem;
                margin : 0
            }

            .carousel-caption{
                color : black;
                background-color: white;

                div{
                    display : flex;
                    align-items: center;
                    justify-content: space-evenly;
                    
                    button{
                        padding: .5rem;
                        border-radius: 5px;
                        color : black;
                        background-color: transparent;
                        border : none;  
                        
                        a{
                            text-decoration: none;
                        }

                        transition : background-color .5s;

                        &:hover{
                            color : white;
                            background-color: rgb(70,0,57);
                        }


                    }
                }


            }
            

        }
    }
    
`

export { SectionProjects }