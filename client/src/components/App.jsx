import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import OpenWeather from './OpenWeather.jsx';
import Noaa from './Noaa.jsx';
import Windy from './Windy.jsx';


const App = () => {
  const [city, setCity] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [weather, setWeather] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const api = {
    key: "416902f1646d3c4ec3c156f7699ee0e0",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const cities = [
    {city: 'seattle', station: 'WPOW1'},
    {city: 'port townsend', station: 'PTWW1'},
    {city: 'bellingham', station: 'PTWW1'},
  ];

  useEffect(() => {
    setCity(cities[0].city);
    // goToCity(0);
  })

  // const search = (e) => {
  const goToCity = (i) => {
    // if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${cities[i].city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .catch((err) => console.log('error with fetch weather', err))
        .then((result) => {
          setWeather(result);
          setCity('');
          console.log(result)
        });
    // }
  }

  return (
    <div>
      {(!loggedIn) ? (
        <div>
          <Login setLoggedIn={setLoggedIn} goToCity={goToCity} />
        </div>
      ) : (
      <div className={(typeof weather.wind != "undefined") ? `app ${weather.weather[0].main}` : 'app'}>
        <main>
          <OpenWeather weather={weather}/>
          <Noaa city={city}/>
          {/* <Windy city={city}/> */}
          <div className='dotsContainer'>
            {cities.map((city, cityIndex) => (
              <div className='dots'
              onClick={() => {
                goToCity(cityIndex)
                setCity(cities[cityIndex].city)
              }}
              key={cityIndex}>•</div>
            ))}
          </div>
        </main>
      </div>
      )}
    </div>
  );
}

export default App;



          {/* <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
            />
          </div> */}


    // <div className={(typeof weather.main != "undefined") ? (((weather.main.temp) > 16)
    // ? 'app warm' : 'app') : 'app'}>
    // <div className={(typeof weather.wind != "undefined") ? (((weather.wind.speed) > 4)
    //   ? 'app windy' : 'app') : 'app'}>