import React from "react";
import {GrupInput, InputStyle, Label} from "../Styles/InputStyle";
import {Boton, ButtonCenter} from "../Styles/Boton";
import {Formulario} from "../Styles/Formulario";

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
           <Formulario onSubmit={onSubmitConsulta}>
               <div>
                   <Label htmlFor={ciudad}> Ingresa la ciudad </Label>
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