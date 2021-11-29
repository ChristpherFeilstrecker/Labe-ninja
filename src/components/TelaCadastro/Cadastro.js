import React from "react";
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import { Form, Modal } from "antd";
import Mecanico from "../../assets/imagens/mecanico.jpeg";
import {
  ConteinerPrincipal,
  DataConteiner,
  InputConteiner,
  BotaoCadastro,
  ConteinerForm,
} from "./StyledTelaCadastro";
import Select from "react-select";

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
    this.setState({
      pagamento: Array.isArray(event) ? event.map((x) => x.label) : [],
    });
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
        content: "Cadastro efetuado.",
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
        content: err.response.data.message,
      });
    }
  };

  render() {
    return (
      <ConteinerPrincipal>
        <img src={Mecanico} alt="Imagem de um mecânico" />
        <ConteinerForm>
          <h1>CADASTRE O SEU SERVIÇO</h1>
          <Form
            layout="vertical"
            name="complex-form"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 40 }}
          >
            <Form.Item
              name="titulo"
              rules={[{ required: true, message: "Título é obrigatório" }]}
            >
              <InputConteiner
                placeholder={"Título do seu anúncio"}
                value={this.state.titulo}
                onChange={this.mudarTitulo}
              />
            </Form.Item>
            <Form.Item
              name="descricao"
              rules={[{ required: true, message: "Descrição é obrigatória" }]}
            >
              <InputConteiner
                placeholder={"Descrição do seu serviço"}
                value={this.state.descricao}
                onChange={this.mudarDescricao}
              />
            </Form.Item>
            <Form.Item
              name="preco"
              rules={[{ required: true, message: "Preço é obrigatório" }]}
            >
              <InputConteiner
                type="number"
                placeholder={"Informe o preço do serviço"}
                value={this.state.preco}
                onChange={this.mudarPreco}
              />
            </Form.Item>
            <Form.Item
              name="pagamento"
              rules={[
                {
                  required: true,
                  message: "Método de pagamento é obrigatório",
                },
              ]}
            >
              <Select
                isMulti
                options={opcoes}
                placeholder="Método de Pagamento"
                onChange={this.mudarPagamento}
                onSelect={this.mudarPagamento}
              />
            </Form.Item>
            <Form.Item
              name="prazo"
              rules={[{ required: true, message: "O prazo é obrigatório" }]}
            >
              <DataConteiner
                placeholder={"Informe o prazo disponível"}
                value={this.state.prazo}
                onChange={this.mudarPrazo}
              />
            </Form.Item>
            <Form.Item>
              <BotaoCadastro onClick={() => this.criarServico()}>
                Cadastrar
              </BotaoCadastro>
            </Form.Item>
          </Form>
        </ConteinerForm>
      </ConteinerPrincipal>
    );
  }
}
