import styled from 'styled-components'

const Menu = styled.div `
display: flex;
justify-content: space-between;
align-items: center;

img:nth-child(1) {
    width: 5%
}
`
const ConteinerCadastro = styled.div `
display: flex;
justify-content: space-between;

img {
    width: 20rem;
}
`

const ConteinerCarrinho = styled.div `
width: 96%;
display: flex;
align-items: center;
justify-content: space-evenly;

`
const IconeCarrinho = styled.img `
`
const TextoCarrinho = styled.div `
display: flex;
align-items: center;
width: 98%;
p {
    font-size: 1.1rem;
    margin-left: 20rem;
}
img {
    width: 8.4%;

}

`

export { Menu, ConteinerCadastro, ConteinerCarrinho, TextoCarrinho, IconeCarrinho }