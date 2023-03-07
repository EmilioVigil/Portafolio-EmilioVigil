import styled from 'styled-components';



const SectionSkills = styled.section`
    height: 100%;    
    padding-bottom: 10rem;
    
    .sec-skills-title{
        display: flex;
        padding: 5rem;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        h3{

            color: #521C56;
            font-size: 4rem;
        }
    }
    
    .sec-skills-icon{
            margin : auto;
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
                color : #521C56;
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