import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 70vw;
  height: 90vh;
  display: grid;
 
  align-items: center;
  margin: 5vh auto ;
  
  @media screen and (max-width: 768px)  {
    width: 90vw;
  }
`;

export const CheckoutHeader = styled.div`
  width: 70vw;
  padding: 1vh 0;
  display: grid;
  grid-template-columns: 8vw 3.5vw 3vw  1.5vw 3vw;
  grid-column-gap: 12vw;
  border-bottom: 0.1vh solid darkgrey;

  @media screen and (max-width: 768px)  {
    width: 90vw;    
    grid-template-columns: 8vw 3.5vw 1vw  0.5vw 1vw;
    grid-column-gap: 16vw;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 4vw;
  &:last-child {
    width: 1vw;
  }
`;

export const Total = styled.span`
  margin-top: 3vh;
  margin-left: auto;
  font-size: 3vh;
`;
