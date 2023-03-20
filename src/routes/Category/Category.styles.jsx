import styled from 'styled-components';

export const CategoryView = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
 
  row-gap: 4vh;  
  top: 5vh;
  
  width: 100vw;

  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;


  @media screen and (min-width: 769px) and (max-width: 1279px) {     
    display: grid;
    position: relative;
    grid-template-columns: repeat(2, 1fr);
    top: 5vh;
    column-gap: 1vw;
    row-gap: 4vh;
  }

  @media screen and (max-width: 768px) {     
    display: grid;
     position: relative;
    grid-template-columns: repeat(1, 1fr);
    top: 5vh;
    column-gap: 1vw;
    row-gap: 4vh;
  }
`;


export const Title = styled.h2`

  display: grid;
  position: relative;

  font-size: 5vh;
  font-weight: 400;
  top: 2vh;
  text-align: center;

  margin: 1vh;

  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;  

  @media screen and (min-width: 769px) and (max-width: 1279px) {     
    font-size: 5vh;   
   
  }

  @media screen and (max-width: 768px) {     
    font-size: 7vh;
    
  }
`;
