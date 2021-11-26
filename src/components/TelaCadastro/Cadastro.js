import React from "react"
import { BASE_URL, headers } from "../../constantes/credenciais";
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
      dueDate: this.state.prazo
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
          <div>
            <h4>Forma de pagamento</h4>

                  {/* <input type="checkbox" name="debito" value={this.state.pagamento} onChange={this.mudarPagamento} />
                  <label for="debito">Cartão de Débito</label>
                  <input type="checkbox" name="credito" value={this.state.pagamento} onChange={this.mudarPagamento} />
                  <label for="credito">Cartão de Crédito</label>
                  <input type="checkbox" name="paypal" value={this.state.pagamento} onChange={this.mudarPagamento}/>
                  <label for="paypal">PayPal</label>
                  <input type="checkbox" name="boleto" value={this.state.pagamento} onChange={this.mudarPagamento}/>
                  <label for="boleto">Boleto</label>
                  <input type="checkbox" name="pix" value={this.state.pagamento} onChange={this.mudarPagamento}/>
                  <label for="pix">Pix</label> */}
    
          </div>
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