import styled from "@emotion/styled";


export const colores = {
    borde: "#0075ff",
    borde2: '#e50202',
    exito: '#1ed12d'
}
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
  width: 40%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid ${colores.borde2};
  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }
`
