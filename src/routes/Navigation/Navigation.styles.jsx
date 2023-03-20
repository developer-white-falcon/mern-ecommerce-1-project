import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: grid;
  position: relative;
  grid-template-columns: 70vw 20vw;
  height: 10vh;
  width: 100vw;
 
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;  

  @media screen and (min-width: 769px) and (max-width: 1279px) {
   grid-template-columns: 50vw 49vw;
   top: 2vh;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 30vw 70vw;
    height: 13vh;     
  }
  
`;

export const LogoContainer = styled(Link)`
  display: grid;
  position: relative;
  height: 10vh
  width: 10vw;
  right: 33vw;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    right: 15vw;
   
  }

  @media screen and (max-width: 768px) {
    right: 2vw;
  }
  
`;

export const NavLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  position: relative;
  height: 15vh
  width: 15vw;

  align-items: center;
  justify-content: center;


  @media screen and (min-width: 769px) and (max-width: 1279px){
    width: 46vw;
    grid-template-columns: 10vw 17vw 15vw; 
    grid-column-gap: 3vw;
  
    
    
  }

  @media screen and (max-width: 768px) {
   width: 30vw;
    grid-template-columns: 20vw 30vw 20vw;
  } 
  
`;

export const NavLink = styled(Link)`
  display: grid;
  position: relative;
  height: 5vh;
  width: 5vw;   
  cursor: pointer;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 20vw;
    top: 1vh;    
    font-size: 3vh;
  }

  @media screen and (max-width: 768px) {
   width: 20vw;
   top: 1vh;
   font-size: 2.5vh;
  }
`;

export const NavCartDropdown = styled.div`
  display: grid;
  position: relative;   
  cursor: pointer;
  
`;
