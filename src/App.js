import React from "react";
import Home from "./components/Home";
/* import Item from "./components/Item"; */
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import Cadastro from "./components/TelaCadastro/Cadastro";
import { baseURL, headers } from "./constantes/credenciais";
import axios from "axios";

export default class App extends React.Component {
  state = {
    carrinho: [],
    paginaAtual: "Home",
    jobs: [],
    valorTotal: 0,
    quantidade: 1
  };

  trocaPagina = () => {
    switch (this.state.paginaAtual) {
      case "Home":
        return (
          <Home
            irParaProdutos={this.irParaProdutos}
            irParaCadastro={this.irParaCadastro}
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
          />
        );
      case "Produtos":
        return (
          <Produtos
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
            getAllJobs={this.getAllJobs}
            jobs={this.state.jobs}
            adicionarProduto={this.adicionarProduto}
           
          />
        );
      default:
        return <Home />;
    }
  };

  removerProduto = (itemParaRemover) => {
    if(itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item)=>{
        if(item.id !== itemParaRemover.id){
          return item
        }else{
          return false
        }
      })
      this.setState({carrinho: novoCarrinho})
    } else {
      const novoCarrinho = this.state.carrinho.map((item)=>{
        if(itemParaRemover.id === item.id && item.quantidade >= 1){
          return {...item, quantidade: item.quantidade - 1}
        } else {
          return item
        }
      })
      this.setState({carrinho: novoCarrinho})
    }
    this.removerValorTotal(itemParaRemover.price)
  }


  adicionarProduto = (produto) => {
    console.log(produto)
    const itemCarrinho = this.state.carrinho.filter((item) => {
      if(item.id === produto.id){
        return item
      } else {
        return false
      }
    });

    if (itemCarrinho.length === 0) {
      produto.quantidade = 1
      const novoCarrinho = [produto, ...this.state.carrinho]
      this.setState({carrinho: novoCarrinho})
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if(produto.id === item.id){
          return {...item, quantidade: item.quantidade + 1}
        } else {
          return item
        }
      })
      this.setState({carrinho: novoCarrinho}) 
    }
    this.adicionarValorTotal(produto.price)
  };

  adicionarValorTotal = (valor) => {
    this.setState({valorTotal: this.state.valorTotal + valor})
  }

  removerValorTotal = (valor) => {
    this.setState({valorTotal: this.state.valorTotal - valor})
  }

  irParaHome = () => {
    this.setState({ paginaAtual: "Home" });
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

  componentDidMount = () => {
    this.getAllJobs();
  };

  getAllJobs = async () => {
    try {
      const res = await axios.get(`${baseURL}/jobs`, headers);
      this.setState({ jobs: res.data.jobs });
      console.log(res.data.jobs);
    } catch (err) {
      alert("Erro!");
    }
  };

  render() {
    return <div>{this.trocaPagina()}</div>;
  }
}
