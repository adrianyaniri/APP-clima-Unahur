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
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border: 3px solid ${colores.borde2};
  border-radius: 3px;
  &:hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
    border: 3px solid ${colores.borde};
  }
`

export const Titulo = styled.h1`
  color: #fff;
  height: 50px;
  width: auto;
  text-align: center;
  

`
export const Fecha = styled.h3`
  text-align: center;
  color: #fff;
  font-style: oblique;
`
export const Data = styled.h4`
  color: #fff;
  width: auto;
  height: 20px;
  margin: 20px;
  font-style: italic;
 
`
export const Temperatura = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  text-align: center;
  color: #fff;
  font-size:45px;
  font-weight: 900;
  background-color: rgba(255,255,255, 0.2);
  border-radius: 16px;
`
