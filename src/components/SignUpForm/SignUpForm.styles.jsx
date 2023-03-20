import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 10vh 5vh 50vh; 
  width: 40vw;
 
 
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center; 

  h2 {
    display: grid;
    position: relative;  
    font-size: 2.6vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 80vw;
    margin-bottom: 20vh;
    font-size: 3vh;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-bottom: 20vh;
    font-size: 3vh;    
  }
`;
