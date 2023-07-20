import { useForecastData } from '../hooks';

export const WeatherCard = ({ children }: { children: React.ReactNode }) => {
  const { forecastData, isLoading, error } = useForecastData();

  return (
    <div className="my-4 block w-full  text-center p-6 bg-gradient-to-br from-sky-300 via-rose-300 to-lime-300 border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
};
