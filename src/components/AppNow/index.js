import axios from 'axios';
import clima02 from "../../assets/Weather02.png";
import React, { useState, useEffect } from 'react';

const AppNow = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://api.weatherbit.io/v2.0/current?lat=25.67507&lon=-100.31847&key=7fe2ab964e6549fbbf235b259655c437')
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return(
        <sectionNow>
            <h1>PRONÓSTICO DEL TIEMPO</h1>
            <img src={clima02} />
            <h2>El clima en tu ciudad es el siguiente: </h2>
        {data.map(item => (
          <div key={item.datetime}>
            <p>Ciudad: {item.city_name}</p>
            <p>Temperatura: {item.temp}°C</p>
            <p>Precipitación: {item.precip}%</p>
            <p>Descripción: {item.weather.description}</p>
            <p>Viento: {item.wind_spd} km/h</p>
          </div>
        ))}
        </sectionNow>
    )
}




export default AppNow;

/*
        <sectionNow>
            <h1>EL CLIMA EN TU CIUDAD</h1>
            <img src={clima02} />
            <p>El clima en tu ciudad es el siguiente: </p>
        </sectionNow>
*/