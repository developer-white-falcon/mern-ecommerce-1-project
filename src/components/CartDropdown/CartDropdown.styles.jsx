import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2,1fr);
  position: fixed;

  width: 29vw;
  height: 57vh;

  align-items: center;
  justify-content: center;

  padding: 3vh 3vw;
  border: 0.1vh solid black;
  background-color: white;
  top: 8vh;
  right: 1vw;
  z-index: 15;
  transition: all 0.35s leaner;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 50vw;
    height: 70vh;
    top: 10vh;
   
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 75vh;
    top: 16vh;
   
  }
`;

export const CartItems = styled.div`
  display: grid;
 
  position: relative;
  width: 27vw;
  height: 42vh; 
  margin-bottom: 2vh;
 
  overflow-y: scroll;
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 45vw;
    height: 50vh;
    grid-row-gap: 5vh;
   
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 55vh;
    grid-row-gap: 10vh;
   
  }
   
`;
