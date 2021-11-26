import React from 'react';
import Cachorro from '../../../assets/imagens/cachorrinho.jpeg'

export default function TelaEmConstrucao(props) {
    return(
        <div>
        <div>
        <p>Olá! Este botão ainda não está funcionando<span role="img" aria-label="Emoji triste">😕</span></p>
         <p>Por favor, escolha outra opção.</p>
         <button onClick={props.produtos}>Contratar um Ninja</button>
        </div>
         <img src={Cachorro} alt="Cachorro com um computador"/>
        </div>
    )
}