import axios from "axios";

export const weatherService = () => {
  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=c1a04f7a029beeab7b0bd879ad7a1088"
  );
};
