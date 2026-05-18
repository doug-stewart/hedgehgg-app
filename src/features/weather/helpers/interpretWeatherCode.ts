// Docs: https://open-meteo.com/en/docs#weather_variable_documentation
export const interpretWeatherCode = (code: number) => {
  switch (code) {
    case 0:
      return "Clear skies";
    case 1:
      return "Mostly clear skies";
    case 2:
      return "Partially cloudy";
    case 3:
      return "Cloudy";
    case 45:
    case 48:
      return "Foggy";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Heavy drizzle";
    case 56:
      return "Freezing light drizzle";
    case 57:
      return "Freezing steady drizzle";
    case 61:
      return "Light raining";
    case 63:
      return "Moderate raining";
    case 65:
      return "Heavy raining";
    case 66:
      return "Freezing light rain";
    case 67:
      return "Freezing steady rain";
    case 71:
      return "Light snow";
    case 73:
      return "Moderate snow";
    case 75:
    case 77:
      return "Heavy snow";
    case 80:
      return "Light rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Heavy rain showers";
    case 85:
      return "Light snow flurries";
    case 86:
      return "Steady snow flurries";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm and light hail";
    case 99:
      return "Thunderstorm and heavy hail";
    default:
      return "The end times are here";
  }
};
