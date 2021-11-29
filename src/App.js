import React from "react";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaVazia from "./components/shared/TelaEmConstrucao/TelaEmConstrucao";
import Carrinho from "./components/TelaCarrinho/Carrinho";
import Produtos from "./components/TelaProdutos/Produtos";
import Cadastro from "./components/TelaCadastro/Cadastro";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { GlobalStyle, ConteinerGeral } from "./StyledApp";
import { message } from "antd";


export default class App extends React.Component {
  state = {
    carrinho: [],
    paginaAtual: "Home",
  };

  /************************************ LOCAL STORAGE ************************************/
  salvarLocalStorage = () => {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  };

  pegarLocalStorage = () => {
    const modificarCarrinho = localStorage.getItem("carrinho");
    if (modificarCarrinho) {
      this.setState({ carrinho: JSON.parse(modificarCarrinho) });
    }
  };

  componentDidMount = () => {
    this.pegarLocalStorage();
  };

  componentDidUpdate = (prevState) => {
    if (prevState.carrinho !== this.state.carrinho) {
      this.salvarLocalStorage();
    }
  };

  /************************************ FUNÇÕES DO CARRINHO ************************************/
  adicionarProduto = (produto) => {
    console.log(produto);
    const itemCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      } else {
        return false;
      }
    });

    if (itemCarrinho.length === 0) {
      produto.quantidade = 1;
      message.success("Serviço selecionado");
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({ carrinho: novoCarrinho });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          message.error("Serviço já está selecionado");
          return { ...item, quantidade: item.quantidade };
        } else {
          return item;
        }
      });
      this.setState({ carrinho: novoCarrinho });
    }
  };

  removerProduto = (id) => {
    const retirarItem = [...this.state.carrinho];
    const item = retirarItem.filter((produto) => {
      return produto.id !== id;
    });
    this.setState({ carrinho: item });
  };

  limparCarrinho = () => {
    this.setState({ carrinho: [] });
  };

  /************************************ RENDERIZAR TELAS ************************************/

  trocaPagina = () => {
    switch (this.state.paginaAtual) {
      case "Home":
        return (
          <TelaInicial
            produtos={this.irParaProdutos}
            cadastro={this.irParaCadastro}
          />
        );
      case "Vazia":
        return (
          <TelaVazia
            produtos={this.irParaProdutos}
            cadastro={this.irParaCadastro}
          />
        );
      case "Cadastro":
        return (
          <Cadastro
            irParaProdutos={this.irParaProdutos}
            irParaHome={this.irParaHome}
          />
        );
      case "Carrinho":
        return (
          <Carrinho
            irParaProdutos={this.irParaProdutos}
            irParaHome={this.irParaHome}
            itensDoCarrinho={this.state.carrinho}
            removerProduto={this.removerProduto}
            limparCarrinho={this.limparCarrinho}
          />
        );
      case "Produtos":
        return (
          <Produtos
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
            adicionarProduto={this.adicionarProduto}
            alteraBotao={this.alteraBotao}
          />
        );
      default:
        return <TelaVazia />;
    }
  };

  irParaHome = () => {
    this.setState({ paginaAtual: "Home" });
  };

  irParaTelaVazia = () => {
    this.setState({ paginaAtual: "Vazia" });
  };

  irParaProdutos = () => {
    this.setState({ paginaAtual: "Produtos" });
  };

  irParaCadastro = () => {
    this.setState({ paginaAtual: "Cadastro" });
  };

  irParaCarrinho = () => {
    this.setState({ paginaAtual: "Carrinho" });
  };

  /************************************ RETORNO DE TELA ************************************/
  render() {
    return (
      <div>
        <GlobalStyle />
        <ConteinerGeral>
          <div>
            <Header
              pagina={this.state.paginaAtual}
              home={this.irParaHome}
              telaVazia={this.irParaTelaVazia}
              produtos={this.irParaProdutos}
              cadastro={this.irParaCadastro}
              carrinho={this.irParaCarrinho}
            />
          </div>
          <div>{this.trocaPagina()}</div>
          <div>
            <Footer />
          </div>
        </ConteinerGeral>
      </div>
    );
  }
}
