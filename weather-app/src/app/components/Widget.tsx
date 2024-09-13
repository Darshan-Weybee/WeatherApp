import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { useWeatherData } from '../contexts/weatherContext';
import { CELCIUS, FERENHIT } from '../helpers/constants';
import CloseIcon from '@mui/icons-material/Close';

const Widget = ({cityWeather}:any) => {
    const {tempUnit} = useWeatherData();
    const {setWeatherData, weatherData} = useWeatherData(); 

    const removeCityFromList = () => {
        setWeatherData({...weatherData, data : weatherData.data.filter(weather => weather.location.name != cityWeather.location.name)})
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton  onClick={removeCityFromList}>
                        <CloseIcon/>
                    </IconButton>
                }
                title={cityWeather.location.name}
                subheader={cityWeather.location.country}
            />
            <CardContent>
                <div className="temprature-container">
                    <img src={cityWeather?.current?.condition?.icon} />
                    {tempUnit == CELCIUS && <div className='temp'><span>{cityWeather?.current?.temp_c}°</span>c</div>}
                    {tempUnit == FERENHIT && <div className='temp'><span>{cityWeather?.current?.temp_f}°</span>f</div>}
                </div>
                <div className='condition'>
                    {cityWeather?.current?.condition?.text}
                </div>
            </CardContent>
        </Card>

    )
}

export default Widget