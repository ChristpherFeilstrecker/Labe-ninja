import React from 'react';
import Logo from '../../../assets/imagens/logo.png'
import Carrinho1 from '../../../assets/imagens/carrinho1.svg'
import Carrinho2 from '../../../assets/imagens/carrinho2.svg'
import { Menu, ConteinerCadastro } from './StyledHeader'

export default function Header(props) {
    if(props.pagina === "Home" || props.pagina === "Vazia") {
        return(
            <Menu>
                <img src={ Logo } alt="Logo" onClick={props.home} />
                <div>
                <button onClick={props.telaVazia}>Como Funciona</button>
                <button onClick={props.telaVazia}>Entrar</button>
                <button onClick={props.cadastro}>Quero ser um Ninja</button>
                </div>
            </Menu>
        )
    } else if(props.pagina === "Produtos") {
        return(
            <Menu>
                <img src={ Logo } alt="Logo" onClick={props.home} />
                <img src={ Carrinho2 } alt="Ícone carrinho" onClick={props.carrinho}/> 
            </Menu>
        )
    } else if(props.pagina === "Cadastro") {
        return(
            <Menu>
            <ConteinerCadastro>
            <img src={ Logo } alt="Logo" onClick={props.home} />
                <p>A maior plataforma de contratação de serviços do Brasil.</p>
            </ConteinerCadastro>
                <button onClick={props.produtos}>Contratar um Ninja</button>
            </Menu>
        )
    } else if(props.pagina === "Carrinho") {
        return(
            <Menu>
                <img src={ Logo } alt="Logo" onClick={props.home} />
                <img src={ Carrinho1 } alt="Ícone carrinho" onClick={props.carrinho}/> 
            </Menu>
        )
    }
    
}