import Axios from "axios";

export const axiosInstance = Axios.create({
    baseURL: "https://api.github.com/",
    headers: {
      authorization: "token 29fd46a48ce81825ec72b4d81e9ffb15e073468f"
    }
  });