import { Pressure as Press } from "../Icons";
import { WeatherCard as MyWeatherCard } from "../WeatherCard";
import { useForecastData } from '../../hooks';

export const Pressure = () => {
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

  const pressure = forecastData.current.pressure_mb;
  let pressureText;

  if (pressure < 1000) {
    pressureText = 'Lower than Standard';
  } else if (pressure > 1000 && pressure < 1010) {
    pressureText = 'Slightly Lower than Standard';
  } else if (pressure > 1010 && pressure < 1020) {
    pressureText = 'Normal';
  } else if (pressure > 1020 && pressure < 1030) {
    pressureText = 'Slightly Higher than Standard';
  } else {
    pressureText = 'Higher than Standard';
  }

  return (
    <MyWeatherCard>
      <h5 className="mb-2 gap-2 font-bold flex justify-center items-baseline text-gray-900">
        <Press /> Pressure
      </h5>
      <p className="font-normal text-gray-700">{pressure} hPa</p>
      <p className="font-normal text-gray-700">{pressureText}</p>
    </MyWeatherCard>
  );
};

