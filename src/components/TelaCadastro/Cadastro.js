import React from "react"
import { baseURL, headers } from "../../constantes/credenciais";
import axios from "axios";

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
    let opcoes = Array.from(event.target.selectedOptions, option => option.value)
    this.setState({pagamento: opcoes})
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
      dueDate: this.state.prazo
    };
    try {
      const res = await axios.post(`${baseURL}/jobs`, body, headers)
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
        Cadastro
        <button onClick={this.props.irParaProdutos}> Serviços </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </div>
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
          <select value={this.state.pagamento} onChange={this.mudarPagamento}>
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
            value={this.state.prazo}
            onChange={this.mudarPrazo}
          />
          <button onClick={() => this.criarServico()}>Cadastrar</button>
        </div>
      </div>
    );
  }
}