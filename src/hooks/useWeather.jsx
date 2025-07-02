import React, { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";

export const useWeather = (location) => {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!location) return;
    if (location) {
      setLoading(true);
      weatherService(location)
        .then((res) => {
          setTimeout(() => {
            setWeatherData(res.data);
          }, 1000);
        })
        .catch((err) => {
          setWeatherData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);
  return { weatherData, loading };
};
