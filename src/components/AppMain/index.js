import React from 'react';
import clima01 from "../../assets/Weather01.png";

const AppMain = () => {

    return(
        <>
            <h1> APP DEL CLIMA </h1>
            <img src={clima01} />
            <h2>¡Bienvenido/Bienvenida!</h2>
            <p>En esta página podrás encontrar el clima actual de tu ciudad.</p>
            <p>(De momento solo trae resultados de la ciudad de Monterrey, México. Se hizo uso de axios y de una API del clima en la cual se introdujeron las coordenadas de la ciudad para que así la API nos regrese los valores del clima.)</p>
        </>
    )
}

export default AppMain;