import React from "react"


export default class Produtos extends React.Component {
  state = {
    jobs: [],
    filtro: "",
    precoMin: "",
    precoMax: "",
    sequencia: 1,
  }

  onChangeSequencia = (e) => {
    this.setState({sequencia: e.target.value})
  }

  updateFiltro = (e) => {
    this.setState({filtro: e.target.value})
  }

  updatePrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })
  }

  updatePrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })
  }

  render(){
    //alterar nomes de acordo com o que for discutido com grupo
    /* const servicos = this.state.servicos
      .filter((item) =>{
        return item.servico.toLowerCase().includes(this.state.filtro.toLowerCase())
      })
      .filter((item)=>{
        return this.state.precoMin === "" || item.valor >= this.state.precoMin
      })
      .filter((item)=>{
        return this.state.precoMax === "" || item.valor <= this.state.precoMin
      })
      .sort((item1, item2) => {
        return this.state.sequencia * (item1.valor - item2.valor)
      })
      .map((item) => {
        return (
            <Card>
                <p >{meteorito.imagem}</p>
                <b><p >{meteorito.servico}</p></b>
                <p >R$: {meteorito.valor}</p>
                <button value={this.state.carrinho} >Adicionar ao carrinho</button>
            </Card>
        )
    }) */

    return (
      <div>
        Produtos
        <button onClick={this.props.irParaCarrinho}> Carrinho </button>
        <button onClick={this.props.irParaHome}> Home </button>
        <label for="numero">Preço mínimo:</label>
        <input
          type = "number"
          placeholder = "Preço Mínimo"
          value = {this.state.precoMin}
          onChange = {this.updatePrecoMin}
        />
        <label for="numero">Preço máximo:</label>
        <input
          type = "number"
          placeholder = "Preço Máximo"
          value = {this.state.precoMax}
          onChange = {this.updatePrecoMax}
        />
        <select value={this.state.sequencia} onChange={this.onChangeOrdenacao}>
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
          </select>

      </div>
    );
  }
}