import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useWeather } from "./hooks/useWeather";
import Home from "./pages/Home";

function App() {
  const data = useWeather();

  return (
    <>
      <Header />
      <h1>Weather Report</h1>
      <Home />
      {data && JSON.stringify(data)}
      <Footer />
    </>
  );
}

export default App;
