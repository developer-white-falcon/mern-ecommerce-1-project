import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 10vh 10vh 40vh; 
  width: 40vw;
  
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center; 

  h2 {
    display: grid;
    position: relative;
    margin: 1vh 0;
    font-size: 2.6vh
  }

  
  @media screen and (min-width: 769px) and (max-width: 1279px) {    
    font-size: 3vh;
  }

  @media screen and (max-width: 768px) {   
    font-size: 2.8vh;    
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-tempate-columns: repeat(2,1fr);
  top: 5vh;
  grid-gap: 5vh;
  justify-content: space-between;
  position: relative;
`;
