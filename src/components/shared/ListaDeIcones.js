import React from "react"
import {
    ItemIcone, ConteinerIcones
} from "../TelaInicial/StyledTelaInicial";
import Icone1 from "../../assets/imagens/BookAndPencil.png";
import Icone2 from "../../assets/imagens/Foundation.png";
import Icone3 from "../../assets/imagens/FryingPan.png";
import Icone4 from "../../assets/imagens/Garden.png";
import Icone5 from "../../assets/imagens/LaptopSettings.png";
import Icone6 from "../../assets/imagens/Maintenance.png";
import Icone7 from "../../assets/imagens/TheToast.png";
import Icone8 from "../../assets/imagens/WomanCombingHair.png";
import styled from "styled-components";

export default class listaDeIcones extends React.Component {
    state = {
        listaDeIcones: [
            Icone1, Icone2, Icone3, Icone4, Icone5, Icone6, Icone7, Icone8
        ]
    }
    render() {
        const pegaIcones = this.state.listaDeIcones
            .map((icone, index) => {
                return (
                    <ItemIcone key={index}>
                        <img onClick={this.props.produtos} src={icone} alt="icone 2" />
                    </ItemIcone>
                );
            })
        return (
            <ConteinerIcones>
                {pegaIcones}
            </ConteinerIcones>
        )
    }
}