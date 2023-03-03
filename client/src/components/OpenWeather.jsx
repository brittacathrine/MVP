import React, { useState, useEffect } from 'react';
const api = {
  key: "416902f1646d3c4ec3c156f7699ee0e0",
  base: "https://api.openweathermap.org/data/2.5/"
}

const OpenWeather = ({ weather }) => {

  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp * 9/5 + 32)}°F
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ('')}
    </div>
  );
}

export default OpenWeather;
