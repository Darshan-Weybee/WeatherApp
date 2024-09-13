import { useEffect } from 'react';
import './App.css'
import WidgetListing from './app/components/WidgetListing'
import { useWeatherData } from './app/contexts/weatherContext';
import { USER_DATA_STORAGE, USER_PREFERENCE_STORAGE } from './app/helpers/constants';
import AddButton from './app/components/AddButton';

function App() {
  const { weatherData, tempUnit } = useWeatherData();

  console.log(weatherData);

  useEffect(() => {
    return () => {
      console.log(weatherData.data, "helo")
      localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(weatherData.data))
      localStorage.setItem(USER_PREFERENCE_STORAGE, JSON.stringify(tempUnit))
    }
  }, [weatherData, tempUnit])

  return (
    <>
      <AddButton />
      <WidgetListing />
    </>
  )
}

export default App
