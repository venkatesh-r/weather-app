import React, { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";

export const useWeather = (data) => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    if (data) {
      weatherService(data).then((res) => {
        setTimeout(() => {
          setWeatherData(res.data);
        }, 1000);
      });
    }
  }, [data]);
  return weatherData;
};
