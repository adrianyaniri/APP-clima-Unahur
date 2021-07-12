import styled from "@emotion/styled";

export const Contenedor = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 3fr;
  min-height: 50vh;
  padding: 15px;
  align-content: center;
  
 
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`