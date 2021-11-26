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

export { Menu, ConteinerCadastro }