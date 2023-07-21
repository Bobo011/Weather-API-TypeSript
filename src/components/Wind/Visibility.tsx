import { Visibility as Visible } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const Visibility = () => {
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

  const visibility = forecastData.current.vis_km;
  let visibilityText;

  if (visibility < 1) {
    visibilityText = 'Very Poor Visibility';
  } else if (visibility >= 1 && visibility < 5) {
    visibilityText = 'Poor Visibility';
  } else if (visibility >= 5 && visibility < 10) {
    visibilityText = 'Fair Visibility';
  } else if (visibility >= 10 && visibility < 20) {
    visibilityText = 'Good Visibility';
  } else {
    visibilityText = 'Very Clear Day';
  }

  return (
    <MyWeatherCard>
      <h5 className="mb-2 items-center gap-2 font-bold flex justify-center text-gray-900">
        <Visible /> Visibility
      </h5>
      <p className="font-normal text-gray-700">{visibility} km/h</p>
      <p className="font-normal text-gray-700">{visibilityText}</p>
    </MyWeatherCard>
  );
};
