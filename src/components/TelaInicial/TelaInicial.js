import React from "react";
import Pintor from "../../assets/imagens/pintor.jpg";
import Icone1 from "../../assets/imagens/BookAndPencil.png";
import Icone2 from "../../assets/imagens/Foundation.png";
import Icone3 from "../../assets/imagens/FryingPan.png";
import Icone4 from "../../assets/imagens/Garden.png";
import Icone5 from "../../assets/imagens/LaptopSettings.png";
import Icone6 from "../../assets/imagens/Maintenance.png";
import Icone7 from "../../assets/imagens/TheToast.png";
import Icone8 from "../../assets/imagens/WomanCombingHair.png";

import { ConteinerPrincipal, ConteinerIcones, ItemIcone, ConteinerTexto } from "./StyledTelaInicial";

export default class Home extends React.Component {
  render() {
    return (
      <ConteinerPrincipal>
        <ConteinerIcones>
          <ItemIcone><img onClick={this.props.produtos} src={Icone1} alt="icone 2" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone2} alt="icone 2" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone3} alt="icone 3" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone4} alt="icone 4" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone5} alt="icone 5" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone6} alt="icone 6" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone7} alt="icone 7" /></ItemIcone>
          <ItemIcone><img onClick={this.props.produtos} src={Icone8} alt="icone 8" /></ItemIcone>
        </ConteinerIcones>
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
