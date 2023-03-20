import styled from 'styled-components';

export const Categories = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, fit-content(30vw));
  grid-gap: 1vh;
  position: relative;


  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  overflow: hidden;  
  
  @media screen and (min-width: 769px) and (max-width: 1279px) {       
    grid-template-columns: repeat(2, fit-content(50vw));     
    width: 98vw;
   
  }
  
  @media screen and (max-width: 768px) {  
    grid-template-columns: repeat(1, fit-content(90vw));
    grid-row-gap: 5vh;
  }

`;
