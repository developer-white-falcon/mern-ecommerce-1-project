import styled from 'styled-components';

export const ProductCardContainer = styled.div`
 
  display: grid;
  grid-template-rows: repeat(3,1fr);
  position: relative;
  width: 23vw;
  height: 37vh;
  align-items: center;   
  justify-content: center;
  img {
    display: grid;  
    position: relative;
    width: 23vw;
    height: 33vh;
    object-fit: cover;   
    transition all 0.5s linear;   
  }
  button {
    display: grid;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 10vh;    
    bottom: 15vh;
    opacity: 0;         
    transition all 0.5s linear;
  }
  &:hover {
    img {
      display: grid;  
      position: relative;
      opacity: 0.8;
      transition all 0.3s linear;    

    }
    button {      
      display: grid;
      position: relative;
      width: 15vw;
      height: 10vh;   
    
      bottom: 25vh;
      justify-content: center;
      align-items: center;
      transition all 0.5s linear;
      opacity: 0.85;
    }
  }


  @media screen and (min-width: 769px) and (max-width: 1279px) {  
    width: 45vw;
    height: 71vh;
    img {
      display: grid;  
      position: relative;
      width: 45vw;
      height: 60vh;
      object-fit: cover;   
      transition all 0.5s linear;   
    }
    button {     
      width: 20vw;
      height: 15vh;    
      bottom: 35vh;     
    }
    &:hover {      
      button {      
        width: 20vw;
        height: 15vh;    
        bottom: 45vh; 
      }
    }

  }
    
  @media screen and (max-width: 768px)  {   
    width: 80vw;
    height: 85vh;
    img {
      display: grid;  
      position: relative;
      width: 80vw;
      height: 71vh;
      object-fit: cover;   
      transition all 0.5s linear;   
    }  
    button {     
      width: 35vw;
      height: 15vh;    
      bottom: 35vh;     
    }
    &:hover {      
      button {      
        width: 35vw;
        height: 15vh;    
        bottom: 46vh; 
      }
    }
  }
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 3vw; 
   position: relative;

  align-items: center;
  justify-content: center;
 
  left: 0.5vw;
  top: 1vh;
  width: 22vw;
  height: 3vh; 
 
  font-size: 2vh;  

  @media screen and (min-width: 769px) and (max-width: 1279px){
    font-size: 4vh; 
    width: 39vw;
    height: 10vh;
    grid-column-gap: 7vw; 
  }

  @media screen and (max-width: 768px)  {
    font-size: 4vh; 
    width: 80vw;
    height: 12vh;
    grid-column-gap: 7vw; 
    left: 0vw;
   
  }
`;

export const Name = styled.span`
  display: grid;
  position: relative;
  width: 15vw; 
  
  @media screen and (min-width: 769px) and (max-width: 1279px){
     width: 25vw;     
  }

 @media screen and (max-width: 768px)  {
    width: 60vw; 
  }

`;

export const Price = styled.span`
  display: grid;
  position: relative; 
  align-items: center;
  justify-content: center;
  width: 4vw;  
`;
