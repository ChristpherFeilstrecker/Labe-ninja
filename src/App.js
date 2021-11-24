import React from "react";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";
import Cadastro from "./components/TelaCadastro/Cadastro";
import { baseURL, headers } from "./constantes/credenciais";
import axios from "axios";

export default class App extends React.Component {
  state = {
    paginaAtual: "Home",
    jobs: [],
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
          />
        );
      case "Produtos":
        return (
          <Produtos
            irParaCarrinho={this.irParaCarrinho}
            irParaHome={this.irParaHome}
            getAllJobs={this.getAllJobs}
            jobs={this.state.jobs}
          />
        );
      default:
        return <Home />;
    }
  };

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
