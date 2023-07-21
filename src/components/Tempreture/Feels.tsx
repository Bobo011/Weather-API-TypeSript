import { Feels as Feel } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const Feels = () => {
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

  const feels = forecastData.current.feelslike_c;
  let feelsDescription = "";

  // Add your temperature conditions and descriptions here
  if (feels < 5) {
    feelsDescription = "Feels very cold";
  } else if (feels < 10) {
    feelsDescription = "Feels cold";
  } else if (feels < 20) {
    feelsDescription = "Feels cool";
  } else if (feels < 25) {
    feelsDescription = "Feels warm";
  } else {
    feelsDescription = "Feels hot";
  }

  return (
    <MyWeatherCard>
      <h5 className="mb-2  font-bold flex justify-center items-baseline text-gray-900">
        <Feel /> Feels Like
      </h5>
      <p className="font-normal text-gray-700">{feels}°</p>
      <p className="font-normal text-gray-700">{feelsDescription}</p>
    </MyWeatherCard>
  );
};
