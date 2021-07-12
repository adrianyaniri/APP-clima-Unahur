import React, {useState} from "react";
import {GrupInput, InputStyle, Label} from "../Styles/InputStyle";
import {Boton, ButtonCenter} from "../Styles/Boton";
import {Formulario} from "../Styles/Formulario";

export const ConsultaClima = ({ setConsulta, setCiudad,ciudad, consultarApi,setError}) =>{


    const handleChange = e => {
        setCiudad(e.target.value)
    }
    const onSubmitConsulta = e =>{
        e.preventDefault()
        ciudad.trim() === '' && setError(true)
        setConsulta(ciudad)
    }
    return(
           <Formulario onSubmit={onSubmitConsulta}>
               <div>
                   <Label htmlFor={ciudad}> Ciudad </Label>
                   <GrupInput>
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
                   </GrupInput>
               </div>


            </Formulario>

    )
}