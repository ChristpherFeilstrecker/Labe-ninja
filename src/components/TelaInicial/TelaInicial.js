import React from "react";
import Pintor from "../../assets/imagens/pintor.jpg";
import ListaDeIcones from "../shared/ListaIcones/ListaDeIcones";
import { ConteinerPrincipal, ConteinerTexto } from "./StyledTelaInicial";
export default class Home extends React.Component {
  render() {
    return (
      <ConteinerPrincipal>
        <ListaDeIcones produtos={this.props.produtos} />
        <ConteinerTexto>
          <div>
            <p>
              O jeito mais eficiente de conectar você aos melhores profissionais
              do mercado.
            </p>
            <button onClick={this.props.produtos}>Contratar um Ninja</button>
            <button onClick={this.props.cadastro}>Quero ser um Ninja</button>
          </div>
          <div>
            <img src={Pintor} alt="Imagem de um pintor" />
          </div>
        </ConteinerTexto>
      </ConteinerPrincipal>
    );
  }
}
