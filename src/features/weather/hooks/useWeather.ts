import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "openmeteo";
import {
  airQualityParams,
  airQualityUrl,
  forecastParams,
  forecastUrl,
  locationParms,
} from "../config";
import { processAirQualityData } from "../helpers/processAirQualityData";
import { processForecastData } from "../helpers/processForecastData";

export const useWeather = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const airQualityResponse = await fetchWeatherApi(airQualityUrl, {
        ...locationParms,
        ...airQualityParams,
      });
      const forecastResponse = await fetchWeatherApi(forecastUrl, {
        ...locationParms,
        ...forecastParams,
      });

      const forecast = processForecastData(forecastResponse);
      const air = processAirQualityData(airQualityResponse);

      return { ...forecast, ...air };
    },
    staleTime: Infinity,
  });

  return { forecast: data, isLoading };
};
