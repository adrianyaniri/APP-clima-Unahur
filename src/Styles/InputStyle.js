import styled from "@emotion/styled";
import {colores} from "./Colores";

export const Label = styled.label`
  display: block;
  font-width: 800;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`

export const GrupInput = styled.div`
  position: relative;
  z-index: 90;
 
`
export const InputStyle = styled.input`
  width: 50%;
  font-size: 16px;
  background-color: rgba(255,255,255 ,0.5);
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  box-shadow: 3px 0 30px rgba(163 ,163,163, 0.4);
  border: 3px solid ${colores.borde2};
  &:focus {
    background-color: rgba(255,255,255, 0.85) ;
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }
`
