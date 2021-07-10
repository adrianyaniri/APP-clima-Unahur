import React from "react";
import {ContendeorTarjeta, Data} from "../Styles/TarjetaClima";
import {TarjetaHistorial} from "../Styles/TarjetaHistorial";

export const HistorialClima = ({consultas}) => {

    return(
        <div>
            <ContendeorTarjeta>
                <h3> Historial Clima </h3>
                <TarjetaHistorial>
                    <Data>Ciudad: </Data>
                    <Data> Temperatura: °</Data>
                    <Data> Humedad: %</Data>
                    <Data>Nubosidad: %</Data>
                    <Data> Velocidad del viento:  mts/s</Data>
                </TarjetaHistorial>
            </ContendeorTarjeta>
        </div>
    )
}