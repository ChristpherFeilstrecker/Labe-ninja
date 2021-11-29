import styled from "styled-components";
import { DatePicker, Input } from "antd";

const ConteinerPrincipal = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.1rem 0;

  img {
    width: 28%;
    height: 30rem;
    border-radius: 10px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const DataConteiner = styled(DatePicker)`
  width: 100%;
  height: 2.4rem;
  border-radius: 4px;
`;

const InputConteiner = styled(Input)`
  width: 100%;
  height: 2.4rem;
  border-radius: 4px;
`;
const BotaoCadastro = styled.button`
  background: #7d67c5;
  padding: 0.5rem 2.6rem;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  margin-left: 7.8rem;
`;
const ConteinerForm = styled.div`
  margin-top: 2rem;
  h1 {
    color: #7d67c5;
  }
`;

export {
  ConteinerPrincipal,
  DataConteiner,
  InputConteiner,
  BotaoCadastro,
  ConteinerForm,
};
