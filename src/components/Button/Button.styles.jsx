import styled from 'styled-components';

export const BaseButton = styled.button`
 display: grid;

  width: 27vw;
  height: 8vh;

  align-items: center;
  justify-content: center;  

 

  background-color: #000000;
  color: #ffffff;

  letter-spacing: 0.3vh; 
  text-transform: uppercase;
  font-size: 1.5vh;
  font-family: inherit;
  font-weight: bolder;

  border: none;
  cursor: pointer;
  transition: all 0.35s leaner;
  
  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 0.2vh solid #000000;
    transition: all 0.35s leaner;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px)  {
    width: 45vw;
    height: 10vh;
    font-size: 2vh;
   
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 10vh;
    font-size: 2.5vh;
   
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: #ffffff;
  transition: all 0.35s leaner;
  
  &:hover {
    background-color: #357ae8;
    border: none;
    transition: all 0.35s leaner;
  }
`;

export const InvertedButton = styled(BaseButton)`
  &.inverted {
    background-color: #ffffff;
    color: #000000;
    border: 0.2vh solid #000000;
    transition: all 0.35s leaner;

    &:hover {
      background-color: #000000;
      color: #ffffff;
      border: none;
      transition: all 0.35s leaner;
    }
  }
`;
