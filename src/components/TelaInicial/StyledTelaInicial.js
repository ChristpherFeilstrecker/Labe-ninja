import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 30rem;
`;

const ConteinerIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ffffff;
  margin-top: 0.5rem;
`;

const ItemIcone = styled.div`
  padding: 0.8rem 0;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 66%;
    height: 66%;
    /* background: #E8D0AE; */
    /* background: #CCA3FF; */
    background-color: #7d4ed4;
    border-radius: 100%;
    padding: 0.8rem;
  }

  :hover {
    opacity: 0.8;
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
  }

  img {
    width: 20rem;
    height: 26rem;
    border-radius: 10px;
    position: relative;
    right: 8rem;
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
  }
`;

export { ConteinerPrincipal, ConteinerIcones, ItemIcone, ConteinerTexto };
