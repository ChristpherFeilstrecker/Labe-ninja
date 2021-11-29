import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 30rem;

  @media (max-width: 600px) {
    min-height: 0;
  }
`;

const ConteinerTexto = styled.div`
  display: flex;
  align-items: center;
  margin: 0.7rem 0;

  p {
    font-size: 2.4rem;
    width: 58%;
    line-height: 2.4rem;
    position: relative;
    left: 8rem;

    @media (max-width: 600px) {
      width: 44%;
      left: 0;
      font-size: 1.4rem;
    }
  }

  img {
    width: 20rem;
    height: 26rem;
    border-radius: 10px;
    position: relative;
    right: 8rem;

    @media (max-width: 600px) {
      width: 16rem;
      height: 16rem;
      right: 0rem;
    }
  }

  button {
    border: 1px solid #7d4ed4;
    background: #7d4ed4;
    color: #ffffff;
    border-radius: 6px;
    cursor: default;
    position: relative;
    left: 8rem;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    text-align: center;
    margin-right: 2rem;

    :hover {
      background: transparent;
      color: #000000;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      left: 2rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export { ConteinerPrincipal, ConteinerTexto };
