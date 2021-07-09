import React from "react";
import {InputStyle, Label} from "../Styles/InputStyle";
import {Boton, ButtonCenter} from "../Styles/Boton";

export const ConsultaClima = ({ setConsulta, setCiudad,ciudad, consultarApi }) =>{

    const handleChange = e => {
        setCiudad(e.target.value)
    }
    const onSubmitConsulta = e =>{
        e.preventDefault()
        ciudad.trim() === '' && console.log('campo vacio')
        setConsulta(ciudad)
    }
    return(
        <div>
           <form onSubmit={onSubmitConsulta}>
               <Label htmlFor={ciudad}> Ingresa la ciudad </Label>
                <InputStyle
                    id='ciudad'
                    name='ciudad'
                    value={ciudad}
                    placeholder='ciudad'
                    onChange={handleChange}
                />
               <ButtonCenter>
                   <Boton
                       onClick={consultarApi}
                   >  Enviar
                   </Boton>
               </ButtonCenter>

            </form>
        </div>
    )
}