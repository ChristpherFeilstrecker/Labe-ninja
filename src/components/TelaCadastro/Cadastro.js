import React from "react";
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import { Form, Input, Button, Select, /*DatePicker, message*/ } from "antd";
import Mecanico from "../../assets/imagens/mecanico.jpeg";
import ConteinerPrincipal from "./StyledTelaCadastro";

const opcoes
 = [
  { value:"crédito", label:"Cartão de Crédito"},
  { value:2, label:"Cartão de Débito"},
  { value:3, label:"Pix"},
  { value:4, label:"Paypal"},
  { value:5, label:"Boleto"}
]
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
    
    this.setState({ pagamento: event.target.value });
  };
  mudarPrazo = (event) => {
    this.setState({ prazo: event.target.value });
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
      alert("Cadastro efetuado.");
      this.setState({
        titulo: "",
        descricao: "",
        preco: "",
        pagamento: [],
        prazo: "",
      });
      console.log(res.data.jobs);
    } catch (err) {
      alert(err.response.data);
    }
  };

  render() {
    return (
      <ConteinerPrincipal>
        <img src={Mecanico} alt="Imagem de um mecânico" />
        <Form layout="vertical">
          <Form.Item label="Título">
            <Input
              placeholder={"Título"}
              value={this.state.titulo}
              onChange={this.mudarTitulo}
            />
          </Form.Item>
          <Form.Item label="Descrição">
            <Input
              placeholder={"Descrição"}
              value={this.state.descricao}
              onChange={this.mudarDescricao}
            />
          </Form.Item>
          <Form.Item label="Preço">
            <Input
              placeholder={"Preço"}
              value={this.state.preco}
              onChange={this.mudarPreco}
            />
          </Form.Item>
          <Form.Item label="Formas de Pagamento">
          {/* <Select mode="multiple" value={this.state.pagamento} onChange={this.mudarPagamento}>
              <Select.Option value="Cartão">Cartão</Select.Option>
              <Select.Option>Dinheiro</Select.Option>
              <Select.Option>PayPal</Select.Option>
              <Select.Option>Pix</Select.Option>
            </Select> */}
            {/* <Select mode="multiple"
            options={opcoes}
            placeholder="Formas de Pagamento.."
            onChange={this.mudarPagamento}
            onSelect={this.mudarPagamento}
            value={this.state.pagamento}>
            
            </Select>
               <Select.Option value="Cartão">Cartão</Select.Option>
              <Select.Option value="dinheiro">Dinheiro</Select.Option>
              <Select.Option value="PayPal">PayPal</Select.Option>
              <Select.Option value="Pix">Pix</Select.Option>
            </Select> */}
          </Form.Item>
          <Form.Item label="Prazo">
            <input
            type="date"
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
