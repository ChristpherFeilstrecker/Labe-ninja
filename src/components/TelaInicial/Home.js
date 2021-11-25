import React from "react"


export default class Home extends React.Component {
  render(){
    return (
      <div>
        Home
        <button>Como Funciona</button>
        <button onClick={this.props.irParaProdutos}> Entrar </button>
        <button onClick={this.props.irParaCadastro}> Quero ser um ninja </button>
      </div>
    );
  }
}
