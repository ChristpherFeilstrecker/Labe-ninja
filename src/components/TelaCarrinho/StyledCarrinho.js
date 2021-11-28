import styled from 'styled-components'

const ConjuntoDoCarrinho = styled.div`
  display: flex;
  min-height: 33rem;
  width: 1280px;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  cursor: default;
`
const Produto = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 1280px;  

  width: 97%;

  margin: 20px;
  background-color: #CDC8E1;
  height: 5rem;
` 
const Servicos = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  background: #ffffff;
  width: 90.7rem;
  padding: 0.5rem;
  color: #7D4ED4;
`
const ItemUnico = styled.p`
  display: flex;
  text-align: center;
  color: #000000;
  width: 300px;
  margin: 10px;
  font-weight: bold;
  font-size: 1.2rem;
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

  h4 {

  }
`

const CarrinhoVazio = styled.div `
display: flex;
flex-direction: column;
align-items: center;
h4 {
  font-size: 2rem;
  margin-top: 8rem;
}
button {
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  background: #7D4ED4;
  color: #ffffff;
  font-size: 1.2rem;
}
`
export {ConjuntoDoCarrinho, Produto, Servicos, ItemUnico, ValorTotal, DisplayProdutos, FinalizarCompra, CarrinhoVazio}