import styled from "@emotion/styled";
import {colores} from "./Colores";

export const ContendeorTarjeta = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`

export const TarjetaClima = styled.div`
  width: 400px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border: 3px solid ${colores.borde2};
  border-radius: 3px;
  &:hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
    border: 3px solid ${colores.borde};
    
  }
`

export const Titulo = styled.h1`
  color: #424141;
  height: 50px;
  width: auto;
  text-align: center;
`

export const Data = styled.h3`
  color: #7b7676;
  width: auto;
  height: 20px;
  margin: 20px;
`