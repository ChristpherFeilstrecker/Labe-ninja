import React from 'react';

export default function Header(props) {
    if(props.pagina === "Home" || props.pagina === "Vazia") {
        return(
            <div>
                <h2 onClick={props.home}>LabeNinja</h2>
                <button onClick={props.telaVazia}>Como Funciona</button>
                <button onclick={props.telaVazia}>Entrar</button>
                <button onClick={props.produtos}>Quero contratar um ninja</button>
                <button onClick={props.cadastro}>Quero ser um Ninja</button>
            </div>
        )
    } else if(props.pagina === "Produtos" || props.pagina === "Carrinho") {
        return(
            <div>
                <h2 onClick={props.home}>LabeNinja</h2>
                <button onClick={props.carrinho}>Carrinho</button>
            </div>
        )
    } else if(props.pagina === "Cadastro") {
        return(
            <div>
                <h2 onClick={props.home}>LabeNinja</h2>
                <button onClick={props.produtos}>Contratar um Ninja</button>
            </div>
        )
    }
    
}