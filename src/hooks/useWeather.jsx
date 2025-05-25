import React, { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    weatherService().then((res) => setWeatherData(res.data));
    console.log(res);
  }, []);
  return weatherData;
};

export default useWeather;
