import React from "react"


export default class Cadastro extends React.Component {
  render(){
    return (
      <div>
        Cadastro
        <button onClick={this.props.irParaProdutos}> Serviços </button>
        <button onClick={this.props.irParaHome}> Home </button>
      </div>
    );
  }
}