import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useWeatherData } from '../contexts/weatherContext';
import { getWeatherDataByCity } from '../contexts/weatherAction';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    borderRadius : "1rem",
    display : "flex",
    flexDirection : "column",
    alignItems:"flex-start"
  };

  const textStyle = {
    width : "100%"
  }

const AddButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [city, setCity] = useState<string>();
    const {weatherData,setWeatherData} = useWeatherData();


    const AddNewCity = async () => {
        if(city){
            let newCityData = await getWeatherDataByCity(city);
            if(newCityData) setWeatherData({...weatherData, data : [...weatherData.data, newCityData.data]})
            handleClose();
        }
        else handleClose();
    }

    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} className='add-button' onClick={handleOpen}>Add New City</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <TextField id="outlined-basic" label="City" variant="outlined" sx={textStyle} onChange={e => setCity(e.target.value)}/>
                <Button variant="contained" onClick={AddNewCity}>Add</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default AddButton