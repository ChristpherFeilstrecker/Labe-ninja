import React from "react"


export default class Produtos extends React.Component {
  render(){
    return (
      <div>
        Produtos
        <button onClick={this.props.irParaCarrinho}> Carrinho </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </div>
    );
  }
}