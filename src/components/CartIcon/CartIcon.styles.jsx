import styled from 'styled-components';

export const CartIconContainer = styled.div`
  display: grid;  
  position: relative;
  
  width: 3.5vw;
  height: 3.5vh;
  

  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: pointer;
  svg {
  width: 3.5vw;
  height: 3.5vh;  
  }

 @media screen and (min-width: 769px) and (max-width: 1279px){
    svg {
      width: 6vw;
      height: 6vh;       
    }   
     bottom: 1vh;
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 9vw;
      height: 9vh;     
    } 
     bottom:3vh;
  }
 
`;

export const ItemCount = styled.span`
  display: grid;
  position: relative;
  font-size: 1.8vh;
  font-weight: 400;
  right: 0vh;
  bottom: 2.2vh;
 
  @media screen and (min-width: 769px) and (max-width: 1279px) {   
    font-size: 3vh;    
    bottom: 3.7vh;
    
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5vh;         
    bottom: 5.5vh;
  }

`;
