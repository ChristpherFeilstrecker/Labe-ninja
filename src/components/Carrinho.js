import React from "react"


export default class Carrinho extends React.Component {
  render(){
    return (
      <div>
        Carrinho
        <button onClick={this.props.irParaProdutos}> Serviços </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </div>
    );
  }
}