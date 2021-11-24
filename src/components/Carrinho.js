import React from "react"
import styled from 'styled-components';
import Item from "./Item";

const ConjuntoDoCarrinho = styled.div`
    border: 1px solid black;
`

export default class Carrinho extends React.Component {
    /* componentDidMount = () => {
      this.getAllJobs();
    }; */

    

  render(){
    const itens = this.props.itensDoCarrinho.map(item =>{
      return (
        <div>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <button onClick={() => this.props.removerProduto(item.id)}>x</button>
        </div>
      )
    })

    return (
      <ConjuntoDoCarrinho>
        <h2>Carrinho</h2>
        <div>
          {itens}
        </div>
        <p>Valor Total: R$ {this.props.valorTotal}</p>
        <button>Remover</button>
        <button onClick={this.props.irParaProdutos}> Serviços </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </ConjuntoDoCarrinho>
    );
  }
}

