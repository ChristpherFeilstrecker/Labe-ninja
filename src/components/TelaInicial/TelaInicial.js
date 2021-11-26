import React from "react"
import Pintor from '../../assets/imagens/pintor.jpg'
import  ConteinerPrincipal from "./StyledTelaInicial"


export default class Home extends React.Component {
  render(){
    return (
      < ConteinerPrincipal>
      <div>
        <div>
          <p>O jeito mais eficiente de conectar você aos melhores profissionais do mercado.</p>
        </div>
        <button onClick={this.props.produtos}>Contratar um Ninja</button>
        <button onClick={this.props.cadastro}>Quero ser um Ninja</button>
      </div>
      <img src={ Pintor } alt="Imagem de um pintor" />
      </ ConteinerPrincipal>
    );
  }
}
