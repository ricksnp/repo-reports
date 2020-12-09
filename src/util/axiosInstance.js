import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    authorization: "token "
  }
});