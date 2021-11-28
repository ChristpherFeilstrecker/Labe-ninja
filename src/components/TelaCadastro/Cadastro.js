import React from "react";
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import { Form, Input, Button, DatePicker, Modal} from "antd";
import Mecanico from "../../assets/imagens/mecanico.jpeg";
import ConteinerPrincipal from "./StyledTelaCadastro";
import  Select  from 'react-select'

const opcoes = [
  { value: 1, label: " Cartão de Débito" },
  { value: 2, label: " Cartão de Crédito" },
  { value: 3, label: " Pix" },
  { value: 4, label: " Paypal" },
  { value: 5, label: " Boleto" },
  { value: 6, label: " Dinheiro" },
];

export default class Cadastro extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    preco: "",
    pagamento: [],
    prazo: "",
  };

  mudarTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };
  mudarDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };
  mudarPreco = (event) => {
    this.setState({ preco: event.target.value });
  };
  mudarPagamento = (event) => {
    this.setState({pagamento : Array.isArray(event)?event.map((x)=>x.label):[] })
  };
  mudarPrazo = (event) => {
    this.setState({ prazo: event });
  };

  criarServico = async () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.pagamento,
      dueDate: this.state.prazo,
    };
    try {
      const res = await axios.post(`${BASE_URL}/jobs`, body, headers);
      Modal.success({
        content: ("Cadastro efetuado.")
      });
      this.setState({
        titulo: "",
        descricao: "",
        preco: "",
        pagamento: [],
        prazo: "",
      });
    } catch (err) {
      Modal.error({
        content: (err.response.data.message)
      });
    }
  };

  render() {
    return (
      <ConteinerPrincipal>
        <img src={Mecanico} alt="Imagem de um mecânico" />
        <Form layout="vertical">
          <Form.Item label={" "} >
            <Input
              placeholder={"Título"}
              value={this.state.titulo}
              onChange={this.mudarTitulo}
              
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder={"Descrição"}
              value={this.state.descricao}
              onChange={this.mudarDescricao}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder={"Preço"}
              value={this.state.preco}
              onChange={this.mudarPreco}
            />
          </Form.Item>
          <Select
              isMulti
              options={opcoes}
              placeholder="Método de Pagamento"
              onChange={this.mudarPagamento}
              onSelect={this.mudarPagamento}
            />
          <Form.Item label=" ">
            <DatePicker
              placeholder={"Prazo"}
              value={this.state.prazo}
              onChange={this.mudarPrazo}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => this.criarServico()}>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </ConteinerPrincipal>
    );
  }
}
