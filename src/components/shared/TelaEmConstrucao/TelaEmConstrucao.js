import React from 'react';
import Cachorro from '../../../assets/imagens/cachorrinho.jpeg'
import {CardIcones, Icone, IconeIMG,CarMainConstrucao, TextoMain} from "./StyledTelaEmConstrucao"
import Icone1 from "../../../assets/imagens/BookAndPencil.png"
import Icone2 from "../../../assets/imagens/Foundation.png"
import Icone3 from "../../../assets/imagens/FryingPan.png"
import Icone4 from "../../../assets/imagens/Garden.png"
import Icone5 from "../../../assets/imagens/LaptopSettings.png"
import Icone6 from "../../../assets/imagens/Maintenance.png"
import Icone7 from "../../../assets/imagens/TheToast.png"
import Icone8 from "../../../assets/imagens/WomanCombingHair.png"

export default function TelaEmConstrucao(props) {
    return (
        <div>
            <CardIcones>
                <Icone><IconeIMG src={Icone1} alt="icone 2" /></Icone>
                <Icone><IconeIMG src={Icone2} alt="icone 2" /></Icone>
                <Icone><IconeIMG src={Icone3} alt="icone 3" /></Icone>
                <Icone><IconeIMG src={Icone4} alt="icone 4" /></Icone>
                <Icone><IconeIMG src={Icone5} alt="icone 5" /></Icone>
                <Icone><IconeIMG src={Icone6} alt="icone 6" /></Icone>
                <Icone><IconeIMG src={Icone7} alt="icone 7" /></Icone>
                <Icone><IconeIMG src={Icone8} alt="icone 8" /></Icone>
            </CardIcones>
            <CarMainConstrucao>
                <TextoMain>
                    <p>Olá! Este botão ainda não está funcionando<span role="img" aria-label="Emoji triste">😕</span></p>
                    <p>Por favor, escolha outra opção.</p>
                    <button onClick={props.produtos}>Contratar um Ninja</button>
                </TextoMain>
                <img src={Cachorro} alt="Cachorro com um computador"width="400" height="300"/>
            </CarMainConstrucao>
        </div>
    )
}