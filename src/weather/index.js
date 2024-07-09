// import React, { useEffect, useState } from 'react';
// import 'semantic-ui-css/semantic.min.css';

// function WeatherApp() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState('Kenya');

//   useEffect(() => {
//     const apiUrl = `http://api.weatherapi.com/v1/current.json?key=4f912d8c13354c66aab54404242606&q=London&aqi=no
//     `;
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setWeatherData(data);
//       })
//       .catch((error) => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, [city]);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <label htmlFor="city">Enter a city: </label>
//       <input type="text" id="city" value={city} onChange={handleCityChange} />
//       {weatherData && (
//         <div>
//           <h2>Weather in {weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );

// }

// export default WeatherApp

import { useState } from "react";
import "./index.css";
import Data from "../weatherdata";

function weatherData() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const API_KEY = "4f912d8c13354c66aab54404242606&q";

    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=4f912d8c13354c66aab54404242606&q=London&aqi=no
      `
    );
    const result = await res.json();
    if (res.ok) {
      setData(result);
      setLoading(false);
      setCity("");
      return;
    }
    setError(result.error.message);
    setLoading(false);
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Get Data</button>
      </form>
      {error && <p>{error}</p>}
      {!error && data && <Data data={data} />}
    </div>
  );
}

export default weatherData;
