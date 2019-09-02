import axios from "axios";

const axiosInstance = axios.create({
    responseType: "json",
    timeout: 60000
});

export { axiosInstance };
