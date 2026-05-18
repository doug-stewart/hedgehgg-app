import { useWeather } from "../../hooks/useWeather";
import styles from "./Weather.module.css";

export const Weather = () => {
  const { forecast, isLoading } = useWeather();

  return (
    <section>
      <h2>Weather</h2>
      {isLoading ? (
        <p>Loading&hellip;</p>
      ) : forecast ? (
        <>
          <p data-code={forecast.weather.code}>{forecast.weather.explanation}</p>
          <dl className={styles.stats}>
            <dt>Temp</dt>
            <dd>
              {forecast.temperature.actual}° F<span>({forecast.temperature.feelsLike}° F)</span>
            </dd>
            <dt>AQI</dt>
            <dd>
              {forecast.aqi}
              <span>{forecast.pm25} pm2.5</span>
              <span>{forecast.pm10} pm10</span>
            </dd>
            <dt>Rain</dt>
            <dd>{forecast.precipitation}%</dd>
            <dt>Wind</dt>
            <dd>{forecast.windspeed} mph</dd>
            <dt>UV Index</dt>
            <dd>
              {forecast.uvIndex.value}
              <span>{forecast.uvIndex.explanation}</span>
            </dd>
          </dl>
        </>
      ) : (
        <p>Uh&hellip;</p>
      )}
    </section>
  );
};
