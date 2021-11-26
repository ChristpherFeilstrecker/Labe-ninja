import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

const ConteinerGeral = styled.div `
display: grid;
gap: 2rem;
grid-template-rows: 10% 89% 1&;
`

export { GlobalStyle, ConteinerGeral };