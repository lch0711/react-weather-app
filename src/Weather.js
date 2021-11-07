import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      cloud: response.data.clouds.all,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: "Sunday 17:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Go" className="btn btn-danger" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-2">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C | °F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
              <li>Cloudiness: {weatherData.cloud}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "353945fb94bb7d9cc7861a36dae03c52";

    let units = "metric";
    let urlHead = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${urlHead}q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
