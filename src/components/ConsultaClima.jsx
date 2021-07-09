import React from "react";

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
                <input
                    id='ciudad'
                    name='ciudad'
                    value={ciudad}
                    placeholder='ciudad'
                    onChange={handleChange}
                />
                <button
                    onClick={consultarApi}
                >  Enviar </button>
            </form>
        </div>

    )
}