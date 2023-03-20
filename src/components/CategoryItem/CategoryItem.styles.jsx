import styled from 'styled-components';

export const BackgroundImage = styled.img`
  display: grid;
  position: relative;
  width: 32vw;
  height: 40vh;
  background-size: container;
  background-position: center;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  @media screen and (min-width: 769px) and (max-width: 1279px) {     
    width: 50vw;
    height: 60vh;
  }
  @media screen and (max-width: 768px) {     
    width: 90vw;
    height: 80vh;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2,1fr);
  position: relative;
  width: 12vw;
  height: 10vh;
  padding: 0 2vh;
 
  align-items: center;
  justify-content: center;

  border: 0.1vh solid black;
  background-color: white;
  opacity: 0.6;
  position: absolute;
  transition: all 0.5s ease-out;

  h2 {
    display: grid;
    position: relative;
    font-weight: bold;
    margin: 0.5vh 0.5vw;
    font-size: 3vh;
    color: #4a4a4a;
  }

  p {
    display: grid;
    position: relative;
    font-weight: lighter;
    font-size: 3vh;
  }

 @media screen and (min-width: 769px) and (max-width: 1279px) {     
      width: 25vw;
      height: 20vh;
      h2{
        font-size: 5vh;
      }
      p {
         font-size: 5vh;
      }  
  }
  @media screen and (max-width: 768px) {     
      width: 50vw;
      height: 30vh;
       h2{
        font-size: 7vh;
      }
      p {
         font-size: 6vh;
      }  
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  position: relative;

  width: 32vw;
  height: 40vh;

  align-items: center;
  justify-content: center;

  border: 0.1vh solid black; 
 
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
      transition: all 0.5s ease-out;
    }    
  } 

  @media screen and (min-width: 769px) and (max-width: 1279px){     
    width: 50vw;
    height: 60vh;
    margin: 2.5vh 2vw;
    left:5vw;
  }

  @media screen and (max-width: 768px){     
    width: 90vw;
    height: 80vh;
    left: 1vw;
  }
`;
