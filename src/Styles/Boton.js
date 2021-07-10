import styled from "@emotion/styled";

export const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 50%;
  font-weight: bold;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
  }
`
export const ButtonCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 2;
  padding-top: 8px;
`