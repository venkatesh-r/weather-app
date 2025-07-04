import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useWeather } from "./hooks/useWeather";
import Home from "./pages/Home";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [locationData, setLocationData] = useState<string>("");

  const getLocation = (location: string) => {
    setLocationData(location);
  };

  const { weatherData, loading } = useWeather(locationData);

  return (
    <>
      <Header />
      <Home getlocation={getLocation} />
      <WeatherDisplay weatherData={weatherData} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
