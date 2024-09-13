import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WeatherDataProvider from './app/contexts/weatherContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherDataProvider> 
    <App />
    </WeatherDataProvider>
  </StrictMode>,
)
