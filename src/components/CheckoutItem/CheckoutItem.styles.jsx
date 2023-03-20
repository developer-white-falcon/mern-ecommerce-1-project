import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(5, fit-content(5vw));
  grid-column-gap: 4vw;
  position: relative;
  height: 15vw;
  border-bottom: 0.1vh solid darkgrey;
  padding: 1vh 0;
  font-size: 2vh;
  align-items: center;  

  @media screen and (max-width: 768px) {
    width: 90vw;
     height: 35vw;
    grid-column-gap: 5vw;
  }
`;

export const ImageContainer = styled.div`
  width: 10vw;
  padding-right: 1vw;
  position: relative;
  img {
    width: 10vw;
    height: 20vh;
  }
  @media screen and (max-width: 768px)  {
    width: 20vw;
    padding-right: 1vw;
    position: relative;
    img {
      width: 20vw;
      height: 15vh;
  }
  }
`;

export const BaseSpan = styled.span`
  display: grid; 
  position: relative;
  width: 17vw;
  align-items: center;
  justify-content: center;
 
  
`;

export const Quantity = styled(BaseSpan)`
  display: grid;  
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  width: 5vw;
 
`;

export const Arrow = styled.div`
  display: grid;
  cursor: pointer;
  position: relative;
`;


export const Value = styled.span`
  display: grid;   
  position: relative;
  margin: 0 1vw;
`;

export const RemoveButton = styled.div`
 display: grid;  
 position: relative;
 padding-left: 1vw;
 cursor: pointer;
`;



