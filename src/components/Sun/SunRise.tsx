import { Sunrise as SunDown } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const SunRise = () => {
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

   
      
      
      const sunRise = forecastData.forecast.forecastday[0].astro.sunrise

  return (
    <MyWeatherCard>
      <h5 className="mb-2 text-2xl font-bold flex justify-center text-gray-900"><SunDown /></h5>
      <p className="font-normal text-gray-700">{sunRise}</p>
    </MyWeatherCard>
  );
};
