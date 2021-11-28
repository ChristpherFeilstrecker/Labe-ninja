import React from "react";
import Logo from "../../../assets/imagens/logo.png";
import Carrinho1 from "../../../assets/imagens/carrinho1.svg";
import Carrinho2 from "../../../assets/imagens/carrinho2.svg";
import {
  ConteinerHome,
  CabecalhoHome,
  ConteinerCadastro,
  LogoTextoCadastro,
  ConteinerProdutos,
  ConteinerCarrinho,
  TextoCarrinho,
  IconeCarrinho,
} from "./StyledHeader";

export default function Header(props) {
  if (props.pagina === "Home" || props.pagina === "Vazia") {
    return (
      <ConteinerHome>
        <img src={Logo} alt="Logo" onClick={props.home} />
        <CabecalhoHome>
          <h3 onClick={props.telaVazia}>Como Funciona</h3>
          <h3 onClick={props.telaVazia}>Entrar</h3>
        </CabecalhoHome>
      </ConteinerHome>
    );
  } else if (props.pagina === "Produtos") {
    return (
      <ConteinerProdutos>
        <img src={Logo} alt="Logo" onClick={props.home} />
        <img src={Carrinho2} alt="Ícone carrinho" onClick={props.carrinho} />
      </ConteinerProdutos>
    );
  } else if (props.pagina === "Cadastro") {
    return (
      <ConteinerCadastro>
        <LogoTextoCadastro>
          <img src={Logo} alt="Logo" onClick={props.home} />
          <p>A maior plataforma de contratação de serviços do Brasil.</p>
        </LogoTextoCadastro>
        <button onClick={props.produtos}>Contratar um Ninja</button>
      </ConteinerCadastro>
    );
  } else if (props.pagina === "Carrinho") {
    return (
      <ConteinerCarrinho>
        <TextoCarrinho>
          <img src={Logo} alt="Logo" onClick={props.home} />
          <p>A maior plataforma de contratação de serviços do Brasil</p>
        </TextoCarrinho>
        <IconeCarrinho
          src={Carrinho1}
          alt="Ícone carrinho"
          onClick={props.carrinho}
          width="30"
        />
      </ConteinerCarrinho>
    );
  }
}
