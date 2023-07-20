import { useForecastData } from '../hooks/';

export const City = () => {
  const { forecastData, isLoading, error } = useForecastData();

  // Get the forecast for the current day
  const currentDayForecast = forecastData?.forecast && forecastData.forecast.forecastday[0].day;

  return (
    <main className="flex justify-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : forecastData ? (
        <div className='text-center'>
          {/* Process and display weather data here */}
          <p className='text-3xl font-bold'>{forecastData.location.name} <span className='font-thin'>NO</span></p>
          <p className='text-3xl font-bold text-center'>{forecastData.current.temp_c}°C</p>
          <span>Clouds ({forecastData.current.condition.text})</span>

          {currentDayForecast ? (
            <div>
              {/* Render minimum and maximum temperatures for the current day */}
              <div className='flex justify-around'>
              <p>H: {currentDayForecast.maxtemp_c}°</p> <p>L: {currentDayForecast.mintemp_c}°</p>
              </div>
            </div>
          ) : (
            <p>No forecast data available for today.</p>
          )}
        </div>
      ) : null}
    </main>
  );
};

