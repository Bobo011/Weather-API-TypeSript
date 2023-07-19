import { useEffect, useState } from 'react';

export const useForecastData = () => {
  const apiKey = '3055b145439242699ba92742231907';
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London&days=7`;

  const [forecastData, setForecastData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchForecastData = () => {
    setIsLoading(true);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setForecastData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Error fetching forecast data');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchForecastData();
  }, []);

  return { forecastData, isLoading, error };
};

// const { forecastData, isLoading, error } = useForecastData();
