import React from "react";
import { Modal } from "antd";
import IconeLixo from "../../assets/imagens/clarity_trash-line.svg";
import {
  ConjuntoDoCarrinho,
  Produto,
  Servicos,
  ItemUnico,
  ValorTotal,
  DisplayProdutos,
  FinalizarCompra,
  CarrinhoVazio,
  ConteinerBotoes,
} from "./StyledCarrinho";

export default class Carrinho extends React.Component {
  valorTotalCarrinho = (listaServicos) => {
    let valorTotal = 0;
    for (let servico of listaServicos) {
      valorTotal += Number(servico.price);
    }
    return valorTotal.toFixed(2).replace(".", ",");
  };

  mensagemFinalizarCarrinho = () => {
    Modal.success({
      content: `Os serviços foram contratados. 
      Aguarde o contato do colaborador.`,
    });
    this.props.limparCarrinho();
  };

  render() {
    const itens = this.props.itensDoCarrinho.map((item) => {
      return (
        <Produto key={item.id}>
          <ItemUnico>{item.title.toUpperCase()}</ItemUnico>
          <ItemUnico>R$ {item.price},00</ItemUnico>
          <img
            src={IconeLixo}
            alt="Icone de lixo"
            onClick={() => this.props.removerProduto(item.id)}
          />
        </Produto>
      );
    });

    return (
      <ConjuntoDoCarrinho>
        <Servicos>SERVIÇOS SELECIONADOS</Servicos>
        <DisplayProdutos>
          {this.props.itensDoCarrinho.length === 0 && (
            <CarrinhoVazio>
              <h4>
                Você ainda não selecionou um serviço
                <span role="img" aria-label="Emoji triste">
                  😕
                </span>
              </h4>
              <button onClick={this.props.irParaProdutos}>
                {" "}
                Selecionar serviços{" "}
              </button>
            </CarrinhoVazio>
          )}
          {this.props.itensDoCarrinho.length > 0 && (
            <div>
              <div>{itens}</div>
              <FinalizarCompra>
                <ValorTotal>
                  TOTAL: R${" "}
                  {this.valorTotalCarrinho(this.props.itensDoCarrinho)}
                </ValorTotal>
                <ConteinerBotoes>
                  <button onClick={this.props.limparCarrinho}>
                    Limpar carrinho
                  </button>
                  <button onClick={this.props.irParaProdutos}>
                    {" "}
                    Selecionar mais serviços{" "}
                  </button>
                  <button onClick={this.mensagemFinalizarCarrinho}>
                    CONTRATAR SERVIÇO
                  </button>
                </ConteinerBotoes>
              </FinalizarCompra>
            </div>
          )}
        </DisplayProdutos>
      </ConjuntoDoCarrinho>
    );
  }
}
