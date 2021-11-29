import styled from "styled-components";

const ConteinerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 8%;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 320px;
    img {
      width: 40%;
    }
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

  @media (max-width: 600px) {
    display: none;
  }
`;

const CabecalhoHomeMobile = styled.details`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    transition: all 0.2s;

    summary {
      list-style: none;
      width: 4rem;
      position: relative;
      top: -1rem;
      left: 4rem;
    }

    h3 {
      font-size: 0.8rem;
      position: absolute;
      top: 3rem;
      left: 13.6rem;
    }

    h3:last-child {
      position: absolute;
      top: 4.6rem;
    }
  }
`;

const ConteinerMobile = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

`;

const ConteinerCadastro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    justify-content: center;
  }

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

    @media (max-width: 600px) {
      display: none;
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
    @media (max-width: 600px) {
      width: 15%;
    }
  }

  p {
    color: #7d4ed4;
    font-size: 1.2rem;
    @media (max-width: 600px) {
      display: none;
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

const ConteinerProdutos = styled.div`
  display: flex;
  justify-content: space-between;

  img:first-child {
    width: 8.1%;
  }

  img:last-child {
    width: 2%;
    margin-right: 2rem;
  }

`;

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
  CabecalhoHomeMobile,
  ConteinerMobile,
  ConteinerCadastro,
  LogoTextoCadastro,
  ConteinerProdutos,
  ConteinerCarrinho,
  TextoCarrinho,
  IconeCarrinho,
};
