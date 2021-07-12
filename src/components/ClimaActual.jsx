import React from "react";
import {ContendeorTarjeta, Data, TarjetaClima, Titulo} from "../Styles/TarjetaClima";

export const ClimaActual = ({consulta}) => {

    return(
        <ContendeorTarjeta>
            <TarjetaClima>
                <Titulo> Clima Actual </Titulo>
                <Data>Ciudad: {consulta.name} - {consulta.sys?.country}</Data>
                <Data> Temperatura: {consulta.main?.temp}°</Data>
                <Data> Humedad: {consulta.main?.humidity}%</Data>
                <Data>Nubosidad: {consulta.clouds?.all}%</Data>
                <Data> Velocidad del viento: {consulta.wind?.speed} mts/s</Data>
            </TarjetaClima>
        </ContendeorTarjeta>

    )
}