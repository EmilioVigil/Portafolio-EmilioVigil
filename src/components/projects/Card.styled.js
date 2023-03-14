import styled, { keyframes } from 'styled-components';


const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledCard = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  animation: ${pulseAnimation} 2s ease-in-out infinite;

  @media (max-width : 768px){
    flex-direction: column;
    width : 20rem;
    border : none;

    img{
        width : 15rem;
    }

    div{
        display : flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap : 1rem;
    }

    .card-title{
        margin-top : 1rem;
    }

}


`;

const CardImage = styled.img`
  width: 30rem;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 2rem;
  transition :1s;

  &:hover{
    width: 35rem;
  }

`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #333;
`;

const CardDescription = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  color: #666;
`;

const Button = styled.button`
    border : none;
    background-color: transparent;
    margin-top : 1rem;
    a{
        color : black;
        text-decoration: none;
        background-color: #F0F8FF;
        padding: .5rem;
    }

`


export { StyledCard, CardDescription, CardContent, CardImage, CardTitle, Button }