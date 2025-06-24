import React from "react";

const WeatherDisplay = ({ data }) => {
  const description = data?.weather?.map((val: string) => {
    return val?.description;
  });

  return (
    <>
      {data ? (
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-80 rounded-xl bg-[#ff6a00f8] text-white content-center p-5">
            <span>
              <h2 className="font-bold text-2xl mb-5">Current Weather</h2>
              <p>
                <span className="font-bold text-lg">City:</span> {data?.name}
              </p>
              <p>
                <span className="font-bold text-lg">Current Temperature:</span>{" "}
                {(data?.main?.temp - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Minimum Temperature:</span>{" "}
                {(data?.main?.temp_max - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Maximum Temperature:</span>{" "}
                {(data?.main?.temp_min - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-bold text-lg">Feels like:</span>{" "}
                {(data?.main?.feels_like - 273).toFixed(0)}
              </p>
            </span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default WeatherDisplay;
