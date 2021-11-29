import styled from "styled-components";
import { Input } from "antd";
const { Search } = Input;

const ConteinerPesquisa = styled(Search)`
  width: 40%;
  position: absolute;
  top: 1.6rem;
  right: 26rem;
  border-radius: 2rem;

  @media (max-width: 600px) {
    bottom: 5rem;
    width: 20%
  }
`;

const ConteinerFiltros = styled.div `
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 10px;
padding-left: 6rem;
background: #AFACC2;
height: 4rem;

h2 {
    margin-right: 3rem;
    margin-top: 0.5rem;
}

label:nth-child(4) {
    margin-left: 4rem;
}

@media (max-width: 600px) {
    
  }
`

const ConteinerPreco = styled.input`
  width: 14%;
  border: 1px solid #d9d9d9;
  margin: 0 10px;
  padding: 0.2rem 0;
  padding-left: 0.4rem;
  ::placeholder {
    opacity: 0.6;
  }

  :hover {
    border: 1px solid #1890ff;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px #72caf4;
  }
`;

const ConteinerOrdenacao = styled.select `
  width: 14%;
  border: 1px solid #d9d9d9;
  margin: 0 5px;
  padding: 0.4rem 0;
  padding-left: 0.4rem;

  :hover {
    border: 1px solid #1890ff;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px #72caf4;
  }

`

export { ConteinerPesquisa, ConteinerFiltros, ConteinerPreco, ConteinerOrdenacao };
