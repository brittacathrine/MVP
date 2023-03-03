import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Windy = ({ city }) => {
  const options = {
    key: "Hd710M0KR9lEgokGHjde3pmO3dKrojGX",
    // base: "https://api.openweathermap.org/data/2.5/"
  }

  windyInit( options, callback )

  return (
    <div>
          {/* <div id="windy"></div> */}
          <iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=48.106&lon=-122.714&detailLat=48.106&detailLon=-122.714&width=650&height=450&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
    </div>
  )

}

export default Windy;