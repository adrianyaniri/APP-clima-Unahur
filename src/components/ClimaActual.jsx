import React from "react";
import {ContendeorTarjeta, Data, Description, Fecha, TarjetaClima, Temperatura, Titulo} from "../Styles/TarjetaClima";

export const ClimaActual = ({consulta}) => {

    const fecha = new Date().toDateString()
    return(
        <ContendeorTarjeta>
            <TarjetaClima>
                <Titulo>{consulta.name} , {consulta.sys?.country} </Titulo>
                <Fecha> {fecha}</Fecha>
                <Temperatura>   Temperatura {consulta.main?.temp.toFixed()} °C</Temperatura>
                <Description>
                    {consulta.weather ? consulta.weather[0].description : '' }
                </Description>
                <Data> Humedad: {consulta.main?.humidity} %</Data>
                <Data>Nubosidad: {consulta.clouds?.all} %</Data>
                <Data> Velocidad del viento: {consulta.wind?.speed} mts/s</Data>
            </TarjetaClima>
        </ContendeorTarjeta>

    )
}