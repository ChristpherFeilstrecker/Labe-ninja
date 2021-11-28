import styled from "styled-components";

const DetalhesConteiner = styled.div`
  width: 30%;
  height: 36%;
  background: #cdc8e1;
  border-radius: 10px;
  position: absolute;
  z-index: 2000;
  margin: 20% 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoFechar = styled.h2`
  display: flex;
  justify-content: flex-end;
  width: 120%;
  cursor: default;
`;
const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  word-wrap: break-word;
  line-height: 1.4rem;

  h3 {
    text-align: center;
  }
`;

const ConteinerPagamento = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 80%;

  p { margin-right: 5px;
  }
`;

export {
  DetalhesConteiner,
  ConteinerPagamento,
  BotaoFechar,
  ConteinerPrincipal,
};
