import React from "react"
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import {
  Form,
  Select,
} from 'antd';

export default class Cadastro extends React.Component {
  state = {
    titulo: '',
    descricao: '',
    preco: '',
    pagamento: [],
    prazo: ''
  }

  mudarTitulo = (event) => {
    this.setState({ titulo: event.target.value })
  }
  mudarDescricao = (event) => {
    this.setState({ descricao: event.target.value })
  }
  mudarPreco = (event) => {
    this.setState({ preco: event.target.value })
  }
  mudarPagamento = (event) => {
    const formaDePagamento = [...this.state.pagamento]
     formaDePagamento.push(event.target.value)
    this.setState({pagamento: formaDePagamento})
  }
  mudarPrazo = (event) => {
    this.setState({ prazo: event.target.value })
  }

  criarServico = async () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.pagamento,
      dueDate: this.state.prazo //{formatedDate}
      };
    try {
      const res = await axios.post(`${BASE_URL}/jobs`, body, headers)
      alert("Cadastro efetuado.")
      this.setState({ titulo:"", descricao:"", preco:"", pagamento:[], prazo:""})
      console.log(res.data.jobs)
    } catch (err) {
      alert(err.response)
    }
  }

  render(){
    return (
      <div>
        <div>
          <input 
            placeholder={"Título"}
            value={this.state.titulo}
            onChange={this.mudarTitulo}
          />
          <input 
            placeholder={"Descrição"}
            value={this.state.descricao}
            onChange={this.mudarDescricao}
          />
          <input 
            placeholder={"Preço"}
            value={this.state.preco}
            onChange={this.mudarPreco}
          />

          <Form.Item label="Formas de Pagamento">
          <Select mode="multiple">
            <Select.Option value="Cartão">Cartão</Select.Option>
            <Select.Option value="dinheiro">Dinheiro</Select.Option>
            <Select.Option value="PayPal">PayPal</Select.Option>
            <Select.Option value="Pix">Pix</Select.Option>
          </Select>
          </Form.Item>

          <input 
            type="date"
            placeholder={"Prazo"}
            value={this.state.prazo}
            onChange={this.mudarPrazo}
          />
          <button onClick={() => this.criarServico()}>Cadastrar</button>
        </div>
      </div>
    );
  }
}
