import React, {useEffect, useState} from "react";
import './App.css';
import {Fragment} from "react";
import {ConsultaClima} from "./components/ConsultaClima";
import {ClimaActual} from "./components/ClimaActual";
import {Contenedor} from "./Styles/Contenedor";


const KEY = 'eaed9e10df601aab920b0f2f1e13df89'

function App() {
    let ciudadInicial = JSON.parse(localStorage.getItem('ciudad'))
    if(!ciudadInicial){ ciudadInicial = 'El Palomar'}

    const[ consultaClima, setConsultaClima ] = useState([])
    const[ ciudad, setCiudad] = useState(ciudadInicial)

    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=${KEY}`

    const consultarAPI = async () => {
        try {
            const consulta = await fetch(APIURL)
            const resp = await (await consulta).json()
            setConsultaClima(resp)
            setCiudad('')
            localStorage.setItem('ciudad',JSON.stringify(ciudad))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        consultarAPI()
        let ciudadInicial = JSON.parse(localStorage.getItem('ciudad'))
        ciudadInicial
            ? localStorage.setItem('ciudad',JSON.stringify(...ciudad))
            : localStorage.setItem('ciudad',JSON.stringify([]))
    }, [])

    return (
        <Fragment>
            <Contenedor>
                <ConsultaClima
                    setConsulta={setConsultaClima}
                    consultarApi={consultarAPI}
                    setCiudad={setCiudad}
                    ciudad={ciudad}
                    ciudadInicial={ciudadInicial}
                />
                <ClimaActual
                    consulta={consultaClima}
                />
            </Contenedor>
        </Fragment>
    );
}

export default App;
