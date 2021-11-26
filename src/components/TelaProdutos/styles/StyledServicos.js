import styled from 'styled-components';

const ConteinerPrincipal = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: auto; 
    gap: 2rem;
    margin: 2rem 3rem 0.1rem 9rem;
`

const CardServicos = styled.div `
    width: 18rem;
    height: 12.6rem;
    background: #DFDBF0;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
       margin-right: 9rem;
       padding: 1rem 0 0.5rem;
       color:#7D4ED4;
       cursor: default;

    }
    h3 {
        font-size: 1.4rem;
    }
`

const ConteinerPrecoData = styled.div `
    display: flex;
    font-size: 1.1rem;

    span {
        font-weight: bold;
    }
`

export { ConteinerPrincipal, CardServicos, ConteinerPrecoData }