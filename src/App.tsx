import "./App.css";
import { useWeather } from "./hooks/useWeather";
import Home from "./pages/Home";

function App() {
  const data = useWeather();

  return (
    <>
      <h1>Weather Report</h1>
      <Home />
      {data && JSON.stringify(data)}
    </>
  );
}

export default App;
