import { useWeather } from "../hooks/useWeather.jsx";

const WeatherDisplay = ({ weatherData, loading }) => {
  const description = weatherData?.weather?.map((val: string) => {
    return val?.description;
  });

  if (loading) return <p className="border-red-900 text-black">Loading...</p>;

  return (
    <>
      {weatherData ? (
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-80 rounded-xl bg-[#ff6a00f8] text-white content-center p-5">
            <span>
              <h2 className="font-bold text-2xl mb-5">Current Weather</h2>
              <p>
                <span className="font-bold text-lg">City:</span>{" "}
                {weatherData?.name}
              </p>
              <p>
                <span className="font-bold text-lg">Current Temperature:</span>{" "}
                {(weatherData?.main?.temp - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Minimum Temperature:</span>{" "}
                {(weatherData?.main?.temp_max - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Maximum Temperature:</span>{" "}
                {(weatherData?.main?.temp_min - 273).toFixed(0)}
              </p>
              <p>
                <span className="font-bold text-lg">Description:</span>{" "}
                {description}
              </p>
              <p>
                <span className="font-bold text-lg">Feels like:</span>{" "}
                {(weatherData?.main?.feels_like - 273).toFixed(0)}
              </p>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WeatherDisplay;
