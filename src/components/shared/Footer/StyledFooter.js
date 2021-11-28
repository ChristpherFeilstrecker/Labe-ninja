import styled from "styled-components"

const Rodape = styled.div `
    display: flex;
    align-items: center;
    background: #ffffff;
    height: 2.3rem;

    p{
        margin-top: 0.6rem;
    }
`

const IconeRodape = styled.div `
    display: flex;
    justify-content: flex-start;
    margin-right: 20rem;
    margin-left: 2rem;

    a {
        text-decoration: none;
        color: inherit;
    }

    i {
        padding: 0 1rem;
    }
`

export { Rodape, IconeRodape }