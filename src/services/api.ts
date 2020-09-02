import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/?apikey=8a0f3cd",
});

export default api;
