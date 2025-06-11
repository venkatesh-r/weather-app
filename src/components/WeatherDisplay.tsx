import React from "react";

const WeatherDisplay = ({ data }) => {
  const description = data?.weather?.map((val: string) => {
    return val?.description;
  });

  return (
    <div className="flex justify-center items-center w-80 rounded-xl bg-[#4F90CF] text-white content-center p-5">
      {data && (
        <span>
          <h2 className="font-bold text-2xl">Current Weather</h2>
          <p>City: {data?.name}</p>
          <p>Current Temperature: {(data?.main?.temp - 273).toFixed(1)}</p>
          <p>Minimum Temperature: {(data?.main?.temp_max - 273).toFixed(0)}</p>
          <p>Maximum Temperature: {(data?.main?.temp_min - 273).toFixed(0)}</p>
          <p>Description: {description}</p>
          <p>Feels like: {(data?.main?.feels_like - 273).toFixed(1)}</p>
        </span>
      )}
    </div>
  );
};

export default WeatherDisplay;
