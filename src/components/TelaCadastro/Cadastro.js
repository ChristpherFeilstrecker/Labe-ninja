import React from "react"
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import Select from 'react-select';
// import {
//   Form,
//   Select,
// } from 'antd';

const opcoes = [
  { value:1, label:"Cartão de Crédito"},
  { value:2, label:"Cartão de Débito"},
  { value:3, label:"Pix"},
  { value:4, label:"Paypal"},
  { value:5, label:"Boleto"}
]

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
    this.setState({pagamento : Array.isArray(event)?event.map((x)=>x.label):[] })
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

          <Select
                isMulti
                options={opcoes}
                placeholder="Formas de Pagamento.."
            
              onChange={this.mudarPagamento}
             onSelect={this.mudarPagamento}
          />

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
