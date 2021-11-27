import styled from "styled-components";

const DetalhesConteiner = styled.div`
  width: 30%;
  height: 36%;
  background: #CDC8E1;
  border-radius: 10px;
  position: absolute;
  z-index: 2000;
  margin: 20% 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;

  h4 {
      cursor: default;
  }
`;

const ConteinerPagamento = styled.div `

`

export { DetalhesConteiner, ConteinerPagamento }