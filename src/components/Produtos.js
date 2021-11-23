import React from 'react';

export default class Produtos extends React.Component {
  state = {
    jobs:  [],
    filtro: "",
    precoMin: "",
    precoMax: "",
    sequencia: 1,
    parametro: "title"
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

  updateParametro = (event) => {
    this.setState({parametro: event.target.value})
  }

  componentDidMount = () => {
		this.props.getAllJobs()
	}

  render(){
    const servicos = this.props.jobs
      .filter((item) =>{
        return item.title.toLowerCase().includes(this.state.filtro.toLowerCase()) ||
        item.description.toLowerCase().includes(this.state.filtro.toLowerCase())
      })
      .filter((item)=>{
        return this.state.precoMin === "" || item.price >= this.state.precoMin
      })
      .filter((item)=>{
        return this.state.precoMax === "" || item.price <= this.state.precoMax
      })
      .sort((item1, item2) => {
        switch (this.state.parametro){
        case "title":
          return this.state.sequencia * item1.title.localeCompare(item2.title)
        case "dueDate":
          return this.state.sequencia*(new Date(item1.dueDate).getTime() - new Date(item2.dueDate).getTime())
        default:
        return this.state.sequencia * (item1.price - item2.price)
        }
      })
      .map((item) => {
        return (
          <div key={item.id}>
            <h3><p>{item.title}</p></h3>
            <p>{item.description}</p>
            <p>R$: {item.price}</p>
            <p>{item.dueDate}</p>
            <p>Métodos de pagamento: {item.paymentMethods}</p>
            <button>CONTRATAR!</button>
          </div>
        )
    })

    return (
      <div>
        Produtos
        <button onClick={this.props.irParaCarrinho}> Carrinho </button>
        <button onClick={this.props.irParaHome}> Home </button>

        <h2>Pesquisa</h2>
        <input
         placeholder="Pesquisa"
         value={this.state.filtro}
         onChange={this.updateFiltro}
        />
        
        <h2>Filtros</h2>
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
        
        <label for="sort">Ordenação: </label>
         <select
          name="sort"
          value={this.state.parametro}
          onChange={this.updateParametro}
        >
          <option value="title">Título</option>
          <option value="dueDate">Prazo</option>
          <option value="price">Preço</option>
         </select>

        <label for="sort">Ordenação preço:</label>
        <select value={this.state.sequencia} onChange={this.onChangeSequencia}>
          <option value={1}>Crescente</option>
          <option value={-1}>Decrescente</option>
        </select>

        <div>
        {servicos}
        </div>

      </div>
    );
  }
}