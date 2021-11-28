import styled from 'styled-components'

const CardIcones = styled.div`
border:1px solid black;
display:flex;
justify-content: center;
background-color:white;
margin-top: 0.8rem;
`
const Icone = styled.div`
background-color: #7D4ED4;
border-radius:100%;
margin:15px;
padding:12px
`
const IconeIMG = styled.img`
width:40px;
 height:40px
`
const CarMainConstrucao = styled.div`
background-color: #FFF8CC;
display:grid;
grid-template-columns: 1fr 1fr;
height: 64vh;
align-items: center;
justify-items:center;
`
const TextoMain = styled.b`
display: flex;
flex-direction:column;
align-items: center;
font-size:25px;

button {
    border: 1px solid #7d4ed4;
    background: #7d4ed4;
    color: #ffffff;
    border-radius: 6px;
    cursor: default;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    text-align: center;
    margin-right: 1rem;

    :hover {
      background: transparent;
      color: #000000;
    }
  }
`

export { CardIcones, Icone, IconeIMG, CarMainConstrucao, TextoMain,}