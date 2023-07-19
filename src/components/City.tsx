import { useForecastData } from '../hooks/';

export const City = () => {
  const { forecastData, isLoading, error } = useForecastData();
  console.log(forecastData);

  // Get the forecast for the current day
  const currentDayForecast = forecastData?.forecastday && forecastData.forecastday[0];

  return (
    <main className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : forecastData ? (
        <div>
          {/* Process and display weather data here */}
          <p className='text-3xl font-bold'>{forecastData.location.name} <span className='font-thin'>NO</span></p>
          <p className='text-3xl font-bold text-center'>{forecastData.current.temp_c}°C</p>
          <span>Clouds ({forecastData.current.condition.text})</span>

          {currentDayForecast ? (
            <div>
              {/* Render minimum and maximum temperatures for the current day */}
              <p>H: {currentDayForecast.day.maxtemp_c}°C</p>
              <p>L: {currentDayForecast.day.mintemp_c}°C</p>
            </div>
          ) : (
            <p>No forecast data available for today.</p>
          )}
        </div>
      ) : null}
    </main>
  );
};

