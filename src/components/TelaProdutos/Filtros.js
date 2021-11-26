import React from 'react'

export default function Filtros(props) {
    return (
        <div>
            <input
            placeholder="Pesquisa"
            value={props.filtro}
            onChange={props.mudarFiltro}
          />

          <h2>Filtros</h2>
          <label for="numero">Preço mínimo:</label>
          <input
            type="number"
            placeholder="Preço Mínimo"
            value={props.precoMin}
            onChange={props.mudarPrecoMin}
          />

          <label for="numero">Preço máximo:</label>
          <input
            type="number"
            placeholder="Preço Máximo"
            value={props.precoMax}
            onChange={props.mudarPrecoMax}
          />

          <label for="sort">Ordenação: </label>
          <select
            name="sort"
            value={props.parametro}
            onChange={props.mudarParametro}
          >
            <option value="title">Título</option>
            <option value="dueDate">Prazo</option>
            <option value="price">Preço</option>
          </select>

          <label for="sort">Ordenação preço:</label>
          <select
            value={props.sequencia}
            onChange={props.mudarSequencia}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </div>
    )
}
