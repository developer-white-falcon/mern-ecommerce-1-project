import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  display: grid;  
  position: relative;
  
  bottom: 6vh;
  font-size: 1.3vh;

  color: ${mainColor};

  @media screen and (min-width: 769px) and (max-width: 1279px) {
   font-size: 2.5vh;
   bottom: 7vh;
  }

  @media screen and (max-width: 768px){
    font-size: 2.5vh;  
    bottom: 7vh;  
   
  }
`;

export const FormInputLabel = styled.label`
  display: grid;
  position: relative;

  color: ${subColor};
  font-size: 2vh;
  font-weight: normal;
 
  pointer-events: none;

  left: 0.5vw;
  bottom: 3vh;

  transition: 300ms ease all;
  height: 5vh;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    font-size: 3.5vh;
    bottom: 4vh;
  }

  @media screen and (max-width: 768px){
    font-size: 3.5vh;  
    bottom: 4vh;  
     
  }

`;

export const Input = styled.input`
  display: grid;
  position: relative;
 
  background-color: #ffffff;
  color: ${subColor};

  font-size: 2vh;
  
  width: 100%;
  

  border: none;
  border-radius: 0;
  border-bottom: 0.2vh solid ${subColor};

  

  &:focus {
    outline: none;
    border-bottom: 0.2vh solid ${subColor};
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  display: grid;
  position: relative;
   
  input[type='password'] {
    letter-spacing: 0.1vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    top: 3vh;
  }

  @media screen and (max-width: 768px){
    top: 3vh;  
  }
`;
