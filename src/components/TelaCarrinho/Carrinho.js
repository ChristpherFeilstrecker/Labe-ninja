import React from "react"
import {ConjuntoDoCarrinho, Produto, Servicos, ItemUnico, ValorTotal, DisplayProdutos, FinalizarCompra}from './StyledCarrinho';

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
        <Produto key={item.id}>
          <ItemUnico>{item.title}</ItemUnico>
          <ItemUnico>R$ {item.price}</ItemUnico>
          <button onClick={() => this.props.removerProduto(item.id)}>x</button>
        </Produto>
      )
    })


    return (
      <ConjuntoDoCarrinho>
        <Servicos>SERVIÇOS SELECIONADOS</Servicos>
        <DisplayProdutos>
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
        <FinalizarCompra>
        <ValorTotal>Valor Total: R$ {this.valorTotalCarrinho(this.props.itensDoCarrinho)}</ValorTotal>
        <button onClick={this.props.limparCarrinho}>Limpar carrinho</button>
        <button onClick={this.props.irParaProdutos}> Selecionar mais serviços </button>
        <button onClick={this.mensagemFinalizarCarrinho}>Finalizar</button>
        </FinalizarCompra>
          </div>
        )}
        </DisplayProdutos>
      </ConjuntoDoCarrinho>
    );
  }
}
