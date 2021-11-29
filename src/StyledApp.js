import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      
  }

  body {
    background: #FFF8CC;

      @media (max-width: 600px) {
        width: 100%;
        overflow-x: hidden
      }
  }
`;

const ConteinerGeral = styled.div`
  display: grid;
  grid-template-rows: 10% 89% 1&;

  @media (max-width: 600px) {
    grid-template-rows: repeat(3, 1fr);
  }
`;

export { GlobalStyle, ConteinerGeral };
