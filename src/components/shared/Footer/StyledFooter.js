import styled from "styled-components";

const Rodape = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 2.3rem;

  p {
    margin-top: 0.6rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 40rem;
    height: 3.4rem;
  }
`;

const IconeRodape = styled.div`
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

  @media (max-width: 600px) {
    margin-right: 0;
    justify-content: center;
  }
`;

export { Rodape, IconeRodape };
