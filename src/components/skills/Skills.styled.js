import styled from 'styled-components';



const SectionSkills = styled.section`
    height: 100%;
    /* background-color: #521C56; */
    
    .sec-skills-title{
        display: flex;
        padding: 1rem;
        font-size: 3rem;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        h3{
            color: #521C56;
        }
    }
    

    
    .sec-skills-icon{
            margin: auto;
            width: 20vw;
            height: 100%;
            cursor : pointer;
        .sec-skills-container{
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: center;
            align-content: center;
            gap: 3rem 3rem ;
        }

        .sec-icon{
            transition: font-size .5s , color .5s;
            font-size: 7rem;
            color:black;
        

            &:hover{
                font-size: 8rem;
                color : #FFFB00;
            }
        }
    }



    /* @media (max-width : 768px){
        height: 100%;
        text-align: center;

        .sec-skills-icon{
            display: flex;
            flex-direction: column;
            
            .icon{
                margin:auto;
            }

        }

    } */


`


export { SectionSkills }