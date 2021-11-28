import styled from "styled-components";

const ConteinerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 8%;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
    max-width: 480px;
    min-width: 320px;
  }
  img {
    width: 20%;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;

const CabecalhoHome = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;

  h3 {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-align: center;

    :hover {
      border: 1px solid #7d4ed4;
      background: #7d4ed4;
      color: #ffffff;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;

const ConteinerCadastro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  button {
    margin-right: 1rem;
    border: 1px solid #7d4ed4;
    background: rgba(255, 255, 255, 0.5);
    color: #000000;
    border-radius: 6px;
    cursor: default;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    text-align: center;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;

const LogoTextoCadastro = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 12.8%;
  }

  p {
    color: #7d4ed4;
    font-size: 1.2rem;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;

const ConteinerProdutos = styled.div `
  display: flex;
  justify-content: space-between;

  img:first-child {
    width: 8.1%;
  }

  img:last-child {
    width: 2%;
    margin-right: 2rem;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`

const ConteinerCarrinho = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;

const IconeCarrinho = styled.img``;

const TextoCarrinho = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  p {
    font-size: 1.1rem;
    margin-left: 20rem;
  }
  img {
    width: 8.6%;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
}

`;


export {
  ConteinerHome,
  CabecalhoHome,
  ConteinerCadastro,
  LogoTextoCadastro,
  ConteinerProdutos,
  ConteinerCarrinho,
  TextoCarrinho,
  IconeCarrinho,
};
