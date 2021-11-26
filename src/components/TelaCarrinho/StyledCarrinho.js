import styled from 'styled-components'

const ConjuntoDoCarrinho = styled.div`
  display: flex;
  height: 644px;
  width: 1280px;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`
const Produto = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 20px;
  background-color: #CDC8E1;
  height: 40px;
` 
const Servicos = styled.div`
  text-align: center;
  font-size: 20px;
  color: #7D4ED4;
`
const ItemUnico = styled.li`
  display: flex;
  text-align: center;
  color: #000000;
  width: 300px;
  margin: 10px;
  font-weight: bold;
`

const ValorTotal = styled.p`
  border: 1px solid #CDC8E1;
  display: flex;
  background-color: #FFE442;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`

const DisplayProdutos = styled.div`
  display: flex;
  flex-grow: 1;
  width: 1280px;
  justify-content: center;
  background-color: #FFF8CC;
`

const FinalizarCompra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 1100px;
  margin: 20px;
`
export {ConjuntoDoCarrinho, Produto, Servicos, ItemUnico, ValorTotal, DisplayProdutos, FinalizarCompra}