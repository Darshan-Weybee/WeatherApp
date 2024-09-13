import { apiKey } from "../helpers/api";
import { cityForcastEndpoint, currentCityEndpoint } from "./apiEndpoints";
import { axiosInstance } from "./axiosInstance"
import { cityWeatherData, cityWeatherDataResponse } from "./weatherAction";

export const getWeatherDataByCityService = async (city : string) => {
    return await axiosInstance.get<string, cityWeatherDataResponse>(`${currentCityEndpoint}?key=${apiKey}&q=${city}&aqi=yes`);
}

export const getForecastDataByCityService = async (city : string, days : number) => {
    return await axiosInstance.get(`${cityForcastEndpoint}?key=${apiKey}&q=${city}&days=${days}&aqi=yes&alerts=no`);
}