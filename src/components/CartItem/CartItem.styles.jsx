import styled from 'styled-components';

export const CartItemContainer = styled.div`
  
  display: grid;
  grid-template-columns: 5vw 20vw;
  grid-column-gap: 1vw;
  position: relative;
  width: 27vw;
  height: 10vh;
  margin-bottom: 1vh;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 45vw;
    height: 10vh;
    grid-template-columns: 10vw 35vw;     
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 10vh;
    grid-template-columns: 15vw 55vw;    
  }
`;

export const Img = styled.img`
  display: grid;
  position: relative;
  width: 5vw;
  height: 10vh;
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 10vw;
    height: 15vh;  
  }

 @media screen and (max-width: 768px) {
    width: 15vw;
    height: 20vh;  
  }
`;

export const ItemDetails = styled.div`
  display: grid;
  position: relative; 
  grid-template-columns: 13vw 6vw;  
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  align-items: center;
  justify-content: center;
  padding: 1vh 1vw;
  width: 18vw;
  height: 10vh;
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 33vw;
    height: 15vh;
    grid-template-columns: 17vw 15vw;         
  }

 @media screen and (max-width: 768px) {
    width: 53vw;
    height: 20vh;
    grid-template-columns: 30vw 20vw;  
  }
`;

export const Name = styled.span`
  display: grid;
  position: relative; 
  align-items: center;
  justify-content: center;
  font-size: 1.8vh;
  @media screen and (min-width: 769px) and (max-width: 1279px) {    
    font-size: 2.5vh;     
  }

  @media screen and (max-width: 768px) {    
    font-size: 2.5vh;  
  }
`;
