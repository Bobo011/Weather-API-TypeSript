import { aTest as Humid } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const Humidity = () => {
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

  const humidity = forecastData.current.humidity;
  let humidityDescription = "";

  // Add your humidity percentage conditions and descriptions here
  if (humidity < 30) {
    humidityDescription = "Low humidity, dry air";
  } else if (humidity < 50) {
    humidityDescription = "Moderate humidity";
  } else if (humidity < 70) {
    humidityDescription = "High humidity, somewhat uncomfortable";
  } else {
    humidityDescription = "Very high humidity, very uncomfortable";
  }

  return (
    <MyWeatherCard>
      <h5 className="mb-2 font-bold flex justify-center gap-2 items-center text-gray-900">
        <Humid /> Humidity
      </h5>
      <p className="font-normal text-gray-700">{humidity} %</p>
      <p className="font-normal text-gray-700">{humidityDescription}</p>
    </MyWeatherCard>
  );
};
