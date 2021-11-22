import React from "react"
import Home from "./components/Home"
import Carrinho from "./components/Carrinho"
import Produtos from "./components/Produtos"
import Cadastro from "./components/Cadastro"


export default class App extends React.Component {
	state = {
		paginaAtual: "Home",
	  }
	
	  trocaPagina = () => {
		switch (this.state.paginaAtual) {
		  case ("Home"):
			return <Home irParaProdutos={this.irParaProdutos} irParaCadastro={this.irParaCadastro}/>
		  case ("Cadastro"):
			return <Cadastro irParaProdutos={this.irParaProdutos}irParaHome={this.irParaHome} />
		  case ("Carrinho"):
			return <Carrinho irParaProdutos={this.irParaProdutos}irParaHome={this.irParaHome}/>
			case ("Produtos"):
				return <Produtos irParaCarrinho={this.irParaCarrinho}irParaHome={this.irParaHome}/>
		  default:
			return <Home/>
		}
	  }

	  irParaHome = ()=>{
		this.setState({paginaAtual:"Home"})
	  }
	  irParaProdutos = ()=>{
		this.setState({paginaAtual:"Produtos"})
	  }
	  irParaCadastro = ()=>{
		this.setState({paginaAtual:"Cadastro"})
	  }
	  irParaCarrinho = ()=>{
		this.setState({paginaAtual:"Carrinho"})
	  }
  render(){
    return (
      <div>
        {this.trocaPagina()}
      </div>
    );
  }
}