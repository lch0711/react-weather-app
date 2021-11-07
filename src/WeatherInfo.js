import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description}></img>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C | °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
            <li>Cloudiness: {props.data.cloud}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}