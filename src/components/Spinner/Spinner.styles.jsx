import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  display: grid;
  position: relative;

  height: 80vh;
  width: 100vw;
 
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
`;

export const SpinnerContainer = styled.div`

  display: grid;
  position: relative;

  width: 100px;
  height: 100px;
  border: 0.5vh solid rgba(195, 195, 195, 0.6);
  border-radius: 5vh;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

   @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 100px;
  height: 100px;
  border-radius: 10vh;
   
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    border-radius: 10vh;
   
  }
`;

