import styled from "styled-components";

const CardMainConstrucao = styled.div`
  background-color: #fff8cc;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 67vh;
  align-items: center;
  justify-items: center;
  img {
    border-radius: 10px;
    width: 80%
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  }

  img {
    border-radius: 10px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
  }
`;

const TextoMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  line-height: 2rem;
  position: relative;
  left: 4rem;

  button {
    border: 1px solid #7d4ed4;
    background: #7d4ed4;
    color: #ffffff;
    border-radius: 6px;
    cursor: default;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    text-align: center;
    margin-right: 1rem;

    :hover {
      background: transparent;
      color: #000000;
    }
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
    border: 1px solid black;
    width: 400px;
  }
  button{
    margin: 10px;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  /* tablets */
  }
  @media screen and (min-device-width : 1200px) {
  /* computadores */
  }
`;

export { CardMainConstrucao, TextoMain };
