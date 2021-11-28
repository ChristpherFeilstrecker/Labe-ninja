import React from "react";
// import { Modal} from "react-bootstrap";
import { DetalhesConteiner, ConteinerPagamento, BotaoFechar, ConteinerPrincipal } from './styles/StyledDetalhes'
import { ConteinerPrecoData } from './styles/StyledServicos'

export default function DetalhesServico(props) {
  let converterData = new Date(props.prazo);
  const formatarData = converterData.toLocaleDateString("pt-BR", {timeZone: "UTC"});
  const mostrarDetalhes = (
    <ConteinerPrincipal>
      <BotaoFechar onClick={() => props.paginaProdutos()}>x</BotaoFechar>
      <h2>{props.titulo.toUpperCase()}</h2>
      <h3>{props.descricao}</h3>
      <ConteinerPagamento>Aceita: <span>{props.pagamento.join(', ')}</span></ConteinerPagamento>
      <ConteinerPrecoData><p>Até {formatarData} por R$ <span>{props.preco},00</span></p></ConteinerPrecoData>
    </ConteinerPrincipal>
  );
  return <DetalhesConteiner>{mostrarDetalhes}</DetalhesConteiner>;
}
