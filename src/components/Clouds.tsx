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

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div>
      {/* Process and display weather data here */}
      <ul className='flex justify-around '>
        {forecast.map((dayData: any) => (
          <li className='mt-4 text-center text-2xl' key={dayData.date}>
            <p>{dayData.date === today ? 'Now' : new Date(dayData.date).getDate()}</p>
            <Cloud />
            {dayData.day.avgtemp_c}°
          </li>
        ))}
      </ul>
    </div>
  );
};
