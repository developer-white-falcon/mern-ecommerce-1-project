import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const PreviewContainer = styled.div`
  display: grid;
  position: relative;

  top: 2vh;
  width: 100vw;
  
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    display: grid;
    position: relative;  
   
    width: 100vw; 
    grid-row-gap: 10vh;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    position: relative;

    width: 100vw;
    grid-row-gap: 10vh;
  }

`;

export const Title = styled(Link)`
  display: grid;
  position: relative;
  font-size: 5vh; 
  font-weight: 400;
  cursor: pointer;
  left: 5vw;
  height: 4vh;

   margin: 2vh;
  
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    font-size: 6vh; 
    top: 5vh;
  }

  @media screen and (max-width: 768px)  {
     font-size: 6vh; 
     
     top: 5vh;     
   
  }
`;

export const Preview = styled.div`
 
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  position: relative;  
  width: 96vw;
  
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  z-index: 10;
  

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    position: relative;  
    width: 100vw;   
    grid-row-gap: 5vh;
  }

  @media screen and (max-width: 768px)  {    
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;  
    width: 100vw;  
   
    grid-row-gap: 5vh;
  }
  
`;
