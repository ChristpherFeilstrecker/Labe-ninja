import React from "react"
import { baseURL, headers } from "../../constantes/credenciais";
import axios from "axios";

export default class Cadastro extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    paymentMethods: [],
    dueDate: ''
  }
  
  mudarTitulo = (event) => {
    this.setState({ title: event.target.value })
  }
  mudarDescricao = (event) => {
    this.setState({ description: event.target.value })
  }
  mudarPreco = (event) => {
    this.setState({ price: event.target.value })
  }
  mudarPagamento = (event) => {
    let opcoes = Array.from(event.target.selectedOptions, option => option.value)
    this.setState({paymentMethods: opcoes})
  }
  mudarPrazo = (event) => {
    this.setState({ dueDate: event.target.value })
  }

  criarServico = async () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    };
    try {
      const res = await axios.post(`${baseURL}/jobs`, body, headers)
      alert("Cadastro efetuado.")
      this.setState({ title:"", description:"", price:"", paymentMethods:[], dueDate:""})
      console.log(res.data.jobs)
    } catch (err) {
      alert(err.response)
    }
  }

  render(){
    return (
      <div>
      <div>
        Cadastro
        <button onClick={this.props.irParaProdutos}> Serviços </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </div>
        <div>
          <input 
            placeholder={"Título"}
            value={this.state.title}
            onChange={this.mudarTitulo}
          />
          <input 
            placeholder={"Descrição"}
            value={this.state.description}
            onChange={this.mudarDescricao}
          />
          <input 
            placeholder={"Preço"}
            value={this.state.price}
            onChange={this.mudarPreco}
          />
          <select value={this.state.paymentMethods} onChange={this.mudarPagamento}>
                <option>Selecionar pagamento</option>
                <option>Cartão de Débito</option>
                <option>Cartão de Crédito</option>
                <option>PayPal</option>
                <option>Boleto</option>
                <option>Pix</option>
              </select>
          <input 
            type="date"
            placeholder={"Prazo"}
            value={this.state.dueDate}
            onChange={this.mudarPrazo}
          />
          <button onClick={() => this.criarServico()}>Cadastrar</button>
        </div>
      </div>
    );
  }
}