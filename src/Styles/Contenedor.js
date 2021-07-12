import styled from "@emotion/styled";

export const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  padding: 15px;
 
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`