import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Noaa = ({ city }) => {
  const [windSpeed, setWindSpeed] = useState(null);
  const [gusts, setGusts] = useState(null);
  const [stationId, setStationId] = useState('');
  const [stationName, setStationName] = useState('');

  const stations = {}

  const post = (id, name) => {
    // console.log(currStation)
    axios.get('/noaa', {params: {station: id}})
    .then((res) => {
      console.log(res.data.split()[25])
      setStationId(id);
      setStationName(name);
      setWindSpeed(Math.round(res.data.split('  ')[25] * 1.94384));
      setGusts(Math.round(res.data.split('  ')[26] * 1.94384));
    })
    .catch((err) => console.log(error))
  };

  if (city === 'seattle') post('WPOW1', 'West Point, WA');
  if (city === 'port townsend') post('PTWW1','Port Townsend, WA');
  if (city === 'bellingham') post('46118','Se\'lhaem Bellingham Bay');

  console.log(city)

  return (
    <div >
      {(windSpeed) ? (
        <div>
        <div className='noaa-stats'>
          <div className='noaa-station'>{stationId} {stationName}</div>
          <div>Wind Speed: {windSpeed}kts</div>
          <div>Gusts: {gusts}kts</div>
        </div>
          <button className='noaa-button'>Add station</button>
        </div>
      ) : ('')}
    </div>
  )

}

export default Noaa;
