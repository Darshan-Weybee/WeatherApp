import { useWeatherData } from "../contexts/weatherContext";
import Widget from "./Widget"
import Grid from '@mui/material/Grid2';

const WidgetListing = () => {
    const {weatherData} = useWeatherData();

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
            {weatherData?.data?.map((cityWeather, index) => (
                <Grid key={index} size={{ xs: 12, sm: 4, md: 4 }}>
                    <Widget cityWeather={cityWeather}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default WidgetListing