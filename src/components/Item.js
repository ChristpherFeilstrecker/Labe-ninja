import React from 'react';
import styled from 'styled-components';

const ConjuntoDeItens = styled.div`
    border: 1px solid black;
`

export default class Carrinho extends React.Component {
    render(){
      return (
        <ConjuntoDeItens>
            <p>{this.props.quantidade}</p>
            <p>{this.props.title}</p>
            <button onClick = {this.props.onClick}>Remover</button>
        </ConjuntoDeItens>
      );
    }
  }