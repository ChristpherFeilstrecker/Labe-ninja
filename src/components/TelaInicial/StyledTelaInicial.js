import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ConteinerIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ffffff;
  padding: 0.5rem;

  
`;

const ItemIcone = styled.div `
  img {
    width: 70%;
    height: 70%;
    background: #7D4ED4;
    border-radius: 100%;
    padding: 0.8rem;
  }
`

const ConteinerTexto = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 2.4rem;
    width: 58%;
    line-height: 2.4rem;
    position: relative;
    left: 8rem;
  }

  img {
    width: 21rem;
    height: 27rem;
    border-radius: 10px;
    position: relative;
    right: 8rem;
  }
`;

export { ConteinerPrincipal, ConteinerIcones, ItemIcone, ConteinerTexto };
