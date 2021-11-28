import React from "react";
import { BASE_URL, headers } from "../../constantes/credenciais";
import axios from "axios";
import DetalhesServico from "./DetalhesProduto";
import Filtros from "./Filtros";
import {
  ConteinerPrincipal,
  CardServicos,
  ConteinerPrecoData,
  ConteinerVazio,
  Carregando,
} from "./styles/StyledServicos";
export default class Produtos extends React.Component {
  state = {
    listaServicos: [],
    filtro: "",
    precoMin: "",
    precoMax: "",
    sequencia: 1,
    parametro: "title",
    pagina: false,
    titulo: "",
    descricao: "",
    prazo: "",
    pagamento: [],
    preco: "",
    idServico: "",
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, headers);
      this.setState({ listaServicos: res.data.jobs });
    } catch (err) {
      alert("Erro!");
    }
  };

  pegarTrabalhosId = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs/${id}`, headers);
      this.setState({
        produto: res.data,
        titulo: res.data.title,
        descricao: res.data.description,
        prazo: res.data.dueDate,
        pagamento: res.data.paymentMethods,
        preco: res.data.price,
        idServico: id,
      });
    } catch (err) {
      alert("Erro!");
    }
  };

  abrirPaginaDetalhes = (id) => {
    this.setState({ pagina: true, idServico: id });
  };
  fecharPaginaDetalhes = () => { this.setState({ pagina: false });
  };

  onChangeSequencia = (e) => {
    this.setState({ sequencia: e.target.value });
  };

  updateFiltro = (e) => {
    this.setState({ filtro: e.target.value });
  };

  updatePrecoMin = (event) => {
    this.setState({ precoMin: event.target.value });
  };

  updatePrecoMax = (event) => {
    this.setState({ precoMax: event.target.value });
  };

  updateParametro = (event) => {
    this.setState({ parametro: event.target.value });
  };

  render() {
    const servicos = this.state.listaServicos
      .filter((item) => {
        return (
          item.title.toLowerCase().includes(this.state.filtro.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.state.filtro.toLowerCase())
            
        );
      })
      .filter((item) => {
        return this.state.precoMin === "" || item.price >= this.state.precoMin;
      })
      .filter((item) => {
        return this.state.precoMax === "" || item.price <= this.state.precoMax;
      })
      .sort((item1, item2) => {
        switch (this.state.parametro) {
          case "title":
            return (
              this.state.sequencia * item1.title.localeCompare(item2.title)
            );
          case "dueDate":
            return (
              this.state.sequencia *
              (new Date(item1.dueDate).getTime() -
                new Date(item2.dueDate).getTime())
            );
          default:
            return this.state.sequencia * (item1.price - item2.price);
        }
      })
      .map((item) => {
        let converterData = new Date(item.dueDate);
        const formatarData = converterData.toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        });
        return (
          <CardServicos key={item.id}>
            <div onClick={() => this.pegarTrabalhosId(item.id)}>
              <h4
                onClick={() => {
                  this.abrirPaginaDetalhes(item.id);
                }}
              >
                VER DETALHES
              </h4>
            </div>
            <h3>{item.title.toUpperCase()}</h3>
            <ConteinerPrecoData>
              <p>
                Até {formatarData} por R$ <span>{item.price},00</span>
              </p>
            </ConteinerPrecoData>
            <button onClick={() => this.props.adicionarProduto(item)}>
              CONTRATAR
            </button>
          </CardServicos>
        );
      });

    return (
      <div>
        {this.state.pagina && (
          <DetalhesServico
            paginaProdutos={this.fecharPaginaDetalhes}
            id={this.state.idServico}
            titulo={this.state.titulo}
            descricao={this.state.descricao}
            preco={this.state.preco}
            prazo={this.state.prazo}
            pagamento={this.state.pagamento}
            adicionarProduto={this.props.adicionarProduto}
          />
        )}
        <div>
          <Filtros
            filtro={this.state.filtro}
            mudarFiltro={this.updateFiltro}
            precoMin={this.state.precoMin}
            mudarPrecoMin={this.updatePrecoMin}
            precoMax={this.state.precoMax}
            mudarPrecoMax={this.updatePrecoMax}
            parametro={this.state.parametro}
            mudarParametro={this.updateParametro}
            sequencia={this.state.sequencia}
            mudarSequencia={this.onChangeSequencia}
          />
          <div>
            {this.state.listaServicos.length > 0 ? (
              <ConteinerPrincipal>{servicos}</ConteinerPrincipal>
            ) : (
              <ConteinerVazio>
                <Carregando></Carregando>
                <h1>Carregando...</h1>
              </ConteinerVazio>
            )}
          </div>
        </div>
      </div>
    );
  }
}
