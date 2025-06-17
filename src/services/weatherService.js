import axios from "axios";
const API_KEY = "c1a04f7a029beeab7b0bd879ad7a1088";

export const weatherService = (data) => {
  return axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      data +
      "&appid=" +
      API_KEY
  );
};
