import { Wind } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const WindSpeed = () => {
    const { forecastData, isLoading, error } = useForecastData();

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }
    
      if (!forecastData) {
        return <p>No forecast data available.</p>;
      }

   
  
      
      
      const windSpeed = forecastData.current.wind_kph
      const windDirection =forecastData.current.wind_dir
const gustSpeed =forecastData.current.gust_kph

  return (
    <MyWeatherCard>
      <h5 className="mb-2 items-center font-bold flex justify-center gap-1 text-gray-900"><Wind />Wind</h5>
      <p className="font-normal text-gray-700">{windSpeed} km/h</p>
      <p className="font-bold text-gray-700">{windDirection}, gusts {gustSpeed} km/h</p>


    </MyWeatherCard>
  );
};
