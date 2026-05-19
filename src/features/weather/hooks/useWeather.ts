import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "openmeteo";
import { useGeoLocation } from "../../../hooks/useGeoLocation";
import {
  airQualityParams,
  airQualityUrl,
  forecastParams,
  forecastUrl,
} from "../config";
import { processAirQualityData } from "../helpers/processAirQualityData";
import { processForecastData } from "../helpers/processForecastData";

export const useWeather = () => {
  const geolocation = useGeoLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const airQualityResponse = await fetchWeatherApi(airQualityUrl, {
        ...geolocation,
        ...airQualityParams,
      });
      const forecastResponse = await fetchWeatherApi(forecastUrl, {
        ...geolocation,
        ...forecastParams,
      });

      const forecast = processForecastData(forecastResponse);
      const air = processAirQualityData(airQualityResponse);

      return { ...forecast, ...air };
    },
    enabled: geolocation !== null,
    staleTime: Infinity,
  });

  return { forecast: data, isLoading };
};
