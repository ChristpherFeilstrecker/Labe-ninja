import React from "react"
import styled from 'styled-components';
// import Item from "./Item";

const ConjuntoDoCarrinho = styled.div`
    border: 1px solid black;
`

export default class Carrinho extends React.Component {
  valorTotalCarrinho = (listaServicos) => {
    let valorTotal = 0;
    for (let servico of listaServicos) {
      valorTotal += Number(servico.price);
    }
    return valorTotal.toFixed(2).replace(".", ",");
  };

  mensagemFinalizarCarrinho = () => {
    alert(`    Os serviços foram contratados. 
    Aguarde o contato do colaborador.`)
    this.props.limparCarrinho()
  }


  render(){
    const itens = this.props.itensDoCarrinho.map(item =>{
      return (
        <div key={item.id}>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <button onClick={() => this.props.removerProduto(item.id)}>x</button>
        </div>
      )
    })


    return (
      <ConjuntoDoCarrinho>
        <h2>Carrinho</h2>
        {this.props.itensDoCarrinho.length === 0 && (
          <div>
            <h4>Você ainda não selecionou um serviço<span role="img" aria-label="Emoji triste">😕</span></h4>
            <button onClick={this.props.irParaProdutos}> Selecionar serviços </button>
          </div>
          
        )}
        {this.props.itensDoCarrinho.length > 0 && (
          <div>
          <div>
          {itens}
        </div>
        <p>Valor Total: R$ {this.valorTotalCarrinho(this.props.itensDoCarrinho)}</p>
        <button onClick={this.props.limparCarrinho}>Limpar carrinho</button>
        <button onClick={this.mensagemFinalizarCarrinho}>Finalizar</button>
        <button onClick={this.props.irParaProdutos}> Selecionar mais serviços </button>
          </div>
        )}
      </ConjuntoDoCarrinho>
    );
  }
}
