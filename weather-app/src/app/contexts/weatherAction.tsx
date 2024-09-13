import { getForecastDataByCityService, getWeatherDataByCityService } from "./weatherService";

export interface cityWeatherData{
    location: {
      name: string,
      region: string,
      country: string,
    },
    current: {
      temp_c: number,
      temp_f: number,
      condition: {
        text: string,
        icon: string,
      }
    }
}

export interface cityWeatherDataResponse {
    data : cityWeatherData
}
export const getWeatherDataByCity = async (city : string):Promise<cityWeatherDataResponse> => {
  return  await getWeatherDataByCityService(city);
}

export const getCityForecastData = async (city:string, days : number) => {
    return await getForecastDataByCityService(city, days) 
}

export const addCity = () => {

}

export const removeCity = () => {

}