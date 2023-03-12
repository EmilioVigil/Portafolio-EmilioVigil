import styled from 'styled-components';

const SectionForm = styled.div`
    width: 25rem;
    margin : auto;

    .btn-submit{
        margin-top: 1rem ;
    }


    @media (max-width : 768px){
        width: 100%;


        .form-container{
            display: flex;
            flex-direction: column;
            align-items: center;

        }
        
        .mb-3{
            width: 20rem;
        }



    }


`


export { SectionForm }