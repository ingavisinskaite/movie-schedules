import { axiosInstance } from "../services/axiosService";
import configUrl from "./config.settings.json";

const getConfig = async () => {
    // import sees the type as JSON structure
    const configUrlString = configUrl + "";
    const response = await axiosInstance.get(configUrlString);
    return response.data;
};

export { getConfig };
