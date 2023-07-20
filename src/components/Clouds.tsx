import { useForecastData } from '../hooks/';
import { Cloud } from './Icons';

export const Clouds = () => {
  const { forecastData, isLoading, error } = useForecastData();

  const forecast = forecastData?.forecast?.forecastday;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!forecast) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div>
      {/* Process and display weather data here */}
      
      <ul className='flex gap-3'>
        {forecast.map((dayData: any) => (
          <li key={dayData.date}>
            <Cloud />
            {dayData.day.avgtemp_c}°
          </li>
        ))}
      </ul>
    </div>
  );
};
