import React from "react";
import { Modal} from "antd";
import { DetalhesConteiner, ConteinerPagamento } from './styles/StyledDetalhes'
import { ConteinerPrecoData } from './styles/StyledServicos'

export default function DetalhesServico(props) {
  let converterData = new Date(props.prazo);
  const formatarData = converterData.toLocaleDateString("pt-BR", {timeZone: "UTC"});
  const mostrarDetalhes = (
    <div>
      <h4 onClick={() => props.paginaProdutos()}>x</h4>
      <h2>{props.titulo}</h2>
      <h3>{props.descricao}</h3>
      <ConteinerPagamento>Aceita <span>{props.pagamento}</span></ConteinerPagamento>
      <ConteinerPrecoData><p>Até {formatarData} por R$ <span>{props.preco},00</span></p></ConteinerPrecoData>
      <button onClick={() => props.adicionarProduto(props.id)}>CONTRATAR</button>
    </div>
  );
  return <DetalhesConteiner>{mostrarDetalhes}</DetalhesConteiner>;
}
