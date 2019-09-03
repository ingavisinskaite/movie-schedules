import { axiosInstance } from "./axiosService";
import { MovieDay } from "../models/movieDay";
import mockDataUrl from "../assets/mockData.json";

//later on, this function will filter based on given day
const getMovies = async (day: Date): Promise<Array<MovieDay>> => {
    const mockDataString = mockDataUrl + "";
    const response = await axiosInstance.get(mockDataString);
    return response.data;
};

export { getMovies };