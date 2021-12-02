import React from "react";
import {
  DetalhesConteiner,
  ConteinerPagamento,
  BotaoFechar,
  ConteinerPrincipal,
} from "./styles/StyledDetalhes";
import { ConteinerPrecoData } from "./styles/StyledServicos";

export default function DetalhesServico(props) {
  let converterData = new Date(props.prazo);
  const formatarData = converterData.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
  const mostrarDetalhes = (
    <ConteinerPrincipal>
      <BotaoFechar onClick={() => props.paginaProdutos()}>x</BotaoFechar>
      <h2>{props.titulo.toUpperCase()}</h2>
      <h3>{props.descricao}</h3>
      <ConteinerPagamento>
        {" "}
        <p>Aceita:</p>
        <span>{props.pagamento.join(", ").toLowerCase()}</span>
      </ConteinerPagamento>
      <ConteinerPrecoData>
        <p>
          Até {formatarData} por R$ <span>{props.preco},00</span>
        </p>
      </ConteinerPrecoData>
    </ConteinerPrincipal>
  );
  return <DetalhesConteiner>{mostrarDetalhes}</DetalhesConteiner>;
}
