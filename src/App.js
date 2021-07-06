import React, {useEffect, useState} from "react";
import './App.css';
import {Fragment} from "react";
import {ConsultaClima} from "./components/ConsultaClima";

const KEY = 'eaed9e10df601aab920b0f2f1e13df89'
const consultaInicial = {
    ciudad:'Buenos Aires',
    pais: 'Argentina'
}

function App() {
    const [consulta, setConsulta] = useState(consultaInicial)

    const { ciudad, pais } = consultaInicial
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${KEY}`

    const consultarAPI = async () => {
        try {
            const consulta = await fetch(APIURL)
            const resp = await (await consulta).json()
            setConsulta(resp)
            console.log(resp)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        consultarAPI()
    }, [])


    return (
        <Fragment>
            <h1> App Clima </h1>
            <ConsultaClima
                ciudad={consulta}
            />
        </Fragment>
    );
}

export default App;
