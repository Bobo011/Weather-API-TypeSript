import { useForecastData } from '../hooks';

export const Line = () => {
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

  const time = new Date();
  const londonTime = time.toLocaleString('en-GB', { timeZone: 'Europe/London', hour: 'numeric', hour12: true });

  return (
    <div className="h-6 w-full bg-white overflow-hidden relative">
      <div className={`h-6 bg-gray-400 ${forecastData.timeOfDay === 'day' ? 'w-full' : 'w-1/2'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-black font-bold">{londonTime}</p>
      </div>
    </div>
  );
};
