import { Pop } from '../Icons'
import { WeatherCard as MyWeatherCard } from '../WeatherCard'
import { useForecastData } from '../../hooks'

export const Precipitation = () => {
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

  const precipitation = forecastData.current.precip_in;
  const cloud = forecastData.current.cloud;
  let precipitationText;

  if (precipitation <= 0.1) {
    precipitationText = 'Low Probability';
  } else if (precipitation <= 0.3) {
    precipitationText = 'Medium Probability';
  } else {
    precipitationText = 'High Probability';
  }

  return (
    <MyWeatherCard>
      <h5 className="mb-2 gap-2 font-bold flex items-center justify-center text-gray-900">
        <Pop /> Precipitation
      </h5>
      <p className="font-normal text-gray-700">{precipitation}</p>
      <p className="font-normal text-gray-700">
        {precipitationText}
        <br />
        Clouds at {cloud}%
      </p>
    </MyWeatherCard>
  );
};

