import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { cityWeatherData, getWeatherDataByCity } from "./weatherAction";
import { CELCIUS, USER_DATA_STORAGE, USER_PREFERENCE_STORAGE, weatherLocation } from "../helpers/constants";

export interface response {
    data?: {};
}

interface weatherState {
    loading: boolean
    data: cityWeatherData[]
    error: string
}

interface initialWeatherStateModel {
    weatherData: weatherState,
    setWeatherData: React.Dispatch<React.SetStateAction<weatherState>>,
    tempUnit: string,
    setTempUnit: React.Dispatch<React.SetStateAction<string>>
}

const initialTimerState: initialWeatherStateModel = {
    weatherData: {
        loading: false,
        data: [],
        error: ""
    },
    setWeatherData: () => { },
    tempUnit: CELCIUS,
    setTempUnit: () => { }

}

interface children {
    children: ReactNode
}




const weatherContext = createContext<initialWeatherStateModel>(initialTimerState);

const useWeatherData = () => {
    return useContext(weatherContext)
}

const WeatherDataProvider: FC<children> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<weatherState>({ loading: false, data: [], error: "" });
    const [tempUnit, setTempUnit] = useState<string>(CELCIUS);

    console.log(weatherData, "context")

    useEffect(() => {
        let userPreference = localStorage.getItem(USER_PREFERENCE_STORAGE)
        if (userPreference)
            setTempUnit(JSON.parse(userPreference));

        async function getWeatherData() {

            let storedData = localStorage.getItem(USER_DATA_STORAGE);
            let cityWeatherListing = storedData ? JSON.parse(storedData) : null;
            if (!cityWeatherListing || cityWeatherListing.length == 0) {
                let weatherReport = await getWeatherDataByCity(weatherLocation);
                setWeatherData({ loading: false, data: [weatherReport.data], error: "" });
            }
            else {
                cityWeatherListing.map(async (weather: any) => {
                    let data = (await getWeatherDataByCity(weather.location.name)).data;
                    setWeatherData({ loading: false, data: [...weatherData.data, data], error: "" });
                })
            }
        }
        getWeatherData();
    }, [])

    return (
        <weatherContext.Provider value={{ weatherData, setWeatherData, tempUnit, setTempUnit }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherDataProvider
export { useWeatherData }