import styled from "styled-components";

const ConteinerIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ffffff;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    justify-content: flex-start;
    width: 320px;
    position: absolute;
  }
`;

const ItemIcone = styled.div`
  padding: 0.8rem 0;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 66%;
    height: 66%;
    background-color: #7d4ed4;
    border-radius: 100%;
    padding: 0.8rem;
  }

  :hover {
    opacity: 0.8;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const IconesMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    width: 320px;
    padding: 0.8rem 0;
    display: flex;
    justify-content: flex-start;

    img {
      width: 16%;
      height: 16%;
      background-color: #7d4ed4;
      border-radius: 100%;
      padding: 0.8rem;
    }

    :hover {
      opacity: 0.8;
    }
  }
`;

export { ItemIcone, ConteinerIcones, IconesMobile };
