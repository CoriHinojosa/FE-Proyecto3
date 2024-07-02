import React from 'react';
import clima03 from "../../assets/Weather03.png";
import climaApp from "../../assets/WeatherApp.png";

const AppForm = () => {

    return(
        <>
            <h1>REGISTRO</h1>
            <img src={clima03} />
            <p>Regístrate en nuestra aplicación móbil para recibir noticias actualizadas sobre el clima en tu región.</p>
            <p> Puedes llenar el formulario a continuación para obtener más información:</p>

            <form>
            <label>Nombre: 
                <input type="text" />
            </label>
            <label>E-mail: 
                <input type="text" />
            </label>
            </form>

            <img src={climaApp} />
        </>
    )
}

export default AppForm;