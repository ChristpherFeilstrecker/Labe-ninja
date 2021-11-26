import React from "react";
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import { Form, Input, Button, Select, DatePicker, /*message*/ } from "antd";
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
    
    let formaRepetida = false

    for (let forma of this.state.pagamento){
        if (forma === event.target.value){
            formaRepetida = true
        }
    }

    let value = [... this.state.pagamento]

    if (formaRepetida === true){
        value = this.state.pagamento.filter((forma) => {
            return (forma !== event.target.value)
        })
    } else {
        value.push(event.target.value)
    }

    this.setState({pagamento: value})
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
    console.log(body)
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
      // .catch((err) => alert(err.response.data.message));
      console.log(err.response.data.message);

  //     axios
  //     .post(`${BASE_URL}/jobs`, body, headers)
  //     .then((res) => {
  //       alert(`O serviço ${this.state.title} foi criado com sucesso.`);
  //       this.setState({
  //         title: "",
  //         description: "",
  //         price: "",
  //         dueDate: "",
  //         paymentMethods: "",
  //       });
  //     })
  //     .catch((err) => alert(err.response.data.message));
  // };
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
            <form action="/action_page.php">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
              <label for="Débito">Débito</label>{/* <br> */}
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
              <label for="Crédito">Crédito</label>{/* <br> */}
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
              <label for="Paypal">Paypal</label>{/* <br><br> */}
              <input type="submit" value="Submit">
              <label for="Boleto">Boleto</label>{/* <br><br> */}
              <input type="submit" value="Submit">
              <label for="Pix">Pix</label>{/* <br><br> */}
              <input type="submit" value="Submit">
              </input>
            </form>
          </Form.Item>
          <Form.Item label="Prazo">
            <input type="date"
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
