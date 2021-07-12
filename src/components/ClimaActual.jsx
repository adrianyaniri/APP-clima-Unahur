import React from "react";
import {ContendeorTarjeta, Data, Fecha, TarjetaClima, Temperatura, Titulo} from "../Styles/TarjetaClima";

export const ClimaActual = ({consulta}) => {
    const fecha = new Date().toDateString()
    return(
        <ContendeorTarjeta>
            <TarjetaClima>
                <Titulo>{consulta.name} , {consulta.sys?.country} </Titulo>
                <Fecha> {fecha}</Fecha>
                <Temperatura>   Temperatura {consulta.main?.temp} °C</Temperatura>
                <Data> Humedad: {consulta.main?.humidity} %</Data>
                <Data>Nubosidad: {consulta.clouds?.all} %</Data>
                <Data> Velocidad del viento: {consulta.wind?.speed} mts/s</Data>
            </TarjetaClima>
        </ContendeorTarjeta>

    )
}