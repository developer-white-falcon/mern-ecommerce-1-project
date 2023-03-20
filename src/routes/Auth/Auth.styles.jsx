import styled from 'styled-components';

export const AuthForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  position: relative;
  width: 100vw;
  top: 10vh;
  overflow: hidden;

  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;  
 
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    top: 10vh;
    grid-template-columns: repeat(1,1fr);
    grid-row-gap: 30vh;
    overflow: hidden;

    width: 100vw;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1 ,1fr);
    grid-row-gap: 30vh;
    position: relative;
    top: 10vh;   
   
    overflow: hidden;

    width: 100vw;
  }


`;
