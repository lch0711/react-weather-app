import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Southampton, UK</h1>
      <ul>
        <li>Sunday 17:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Weather-Icon"
          ></img>
          <span className="temperature">18</span>
          <span className="units">°C | °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
            <li>Cloudiness: 20%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
