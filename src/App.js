import React, {useEffect, useState} from "react";
import './App.css';
import {Fragment} from "react";
import {ConsultaClima} from "./components/ConsultaClima";
import {ClimaActual} from "./components/ClimaActual";
import {Contenedor} from "./Styles/Contenedor";
import {HistorialClima} from "./components/HistorialClima";

const KEY = 'eaed9e10df601aab920b0f2f1e13df89'

function App() {
    let consultaInicial = JSON.parse(localStorage.getItem('consultas'))
    if(!consultaInicial){
        consultaInicial = []
    }

    const[ consulta, setConsulta ] = useState({})
    const[ ciudad, setCiudad] = useState(consultaInicial)
    const[consultas ,setConsultas] = useState(consulta)

    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=${KEY}`

    const consultarAPI = async () => {
        try {
            const consulta = await fetch(APIURL)
            const resp = await (await consulta).json()
            setConsulta(resp)
            setCiudad('')
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        consultarAPI()
    }, [])

    return (
        <Fragment>
            <Contenedor>
                <ConsultaClima
                    setConsulta={setConsulta}
                    consultarApi={consultarAPI}
                    setCiudad={setCiudad}
                    ciudad={ciudad}
                />
                <ClimaActual
                    consulta={consulta}
                />
            </Contenedor>
            <HistorialClima
                consultas={consultas}
            />
        </Fragment>
    );
}

export default App;
