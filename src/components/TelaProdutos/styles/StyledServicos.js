import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: auto;
  gap: 2rem;
  margin: 2rem 3rem 1rem;
  min-height: 25.8rem;
`;

const CardServicos = styled.div`
  width: 18rem;
  height: 12.6rem;
  background: #dfdbf0;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-right: 9rem;
    padding: 1rem 0 0.5rem;
    color: #7d4ed4;
    cursor: default;
  }
  h3 {
    font-size: 1.4rem;
    word-wrap: break-word;
    text-align: center;
  }
`;

const ConteinerPrecoData = styled.div`
  display: flex;
  font-size: 1.1rem;

  span {
    font-weight: bold;
  }
`;

const ConteinerVazio = styled.div`
 margin: 7.8rem 0 7.8rem 36.8rem;
`;

const Carregando = styled.div `
 border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #CCA3FF;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export { ConteinerPrincipal, CardServicos, ConteinerPrecoData, ConteinerVazio, Carregando };
