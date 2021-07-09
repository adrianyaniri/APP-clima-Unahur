import React from "react";
import {Boton} from "../Styles/Boton";

export const ClimaActual = ({consulta}) => {

    return(
        <div>
            <h3>Ciudad: {consulta.name} </h3>
            <h4> Temperatura: {consulta.main?.temp}°</h4>
            <h4> Humedad: {consulta.main?.humidity}%</h4>
            <h5>Nubosidad: {consulta.clouds?.all}%</h5>
            <h5> Velocidad del viento: {consulta.wind?.speed} mts/s</h5>
            <Boton> Guardar</Boton>
        </div>
    )
}