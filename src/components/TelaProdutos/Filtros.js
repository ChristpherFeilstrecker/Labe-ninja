import React from 'react';
import { ConteinerPesquisa, ConteinerFiltros, ConteinerPreco, ConteinerOrdenacao } from './styles/StyledFiltros';



export default function Filtros(props) {
    return (
        <div>
            <ConteinerPesquisa
            placeholder="Buscar por nome"
            size="large"
            value={props.filtro}
            onChange={props.mudarFiltro}
          />

          <ConteinerFiltros>
          <h2>Filtros:</h2>
          <ConteinerPreco
          type="number"
            placeholder="Valor Mínimo"
            value={props.precoMin}
            onChange={props.mudarPrecoMin}
            min={1} max={10}
          />
          <ConteinerPreco
          type="number"
            placeholder="Valor Máximo"
            value={props.precoMax}
            onChange={props.mudarPrecoMax}
            min={1} max={10}
          />

          <label for="sort">Ordenação: </label>
          <ConteinerOrdenacao
            name="sort"
            value={props.parametro}
            onChange={props.mudarParametro}
          >
            <option value="title">Título</option>
            <option value="dueDate">Prazo</option>
            <option value="price">Preço</option>
          </ConteinerOrdenacao>

          <label for="sort">Ordenação preço:</label>
          <ConteinerOrdenacao
            value={props.sequencia}
            onChange={props.mudarSequencia}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </ConteinerOrdenacao>
          </ConteinerFiltros>

         
        </div>
    )
}
