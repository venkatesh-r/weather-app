import React, { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";

export const useWeather = (data) => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    weatherService(data).then((res) => {
      setWeatherData(res.data);
    });
  }, [data]);
  return weatherData;
};
