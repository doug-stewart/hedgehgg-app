// Docs: https://open-meteo.com/en/docs#weather_variable_documentation
export const interpretWeatherCode = (code: number, isDay: boolean) => {
  const base = isDay ? "day" : "night";

  switch (code) {
    case 0:
      return { icon: base, explanation: "Clear skies" };
    case 1:
      return { icon: `cloudy-${base}-1`, explanation: "Mostly clear skies" };
    case 2:
      return { icon: `cloudy-${base}-2`, explanation: "Partially cloudy" };
    case 3:
      return { icon: `cloudy-${base}-3`, explanation: "Cloudy" };
    case 45:
    case 48:
      return { icon: "cloudy", explanation: "Foggy" };
    case 51:
      return { icon: "rainy-4", explanation: "Light drizzle" };
    case 53:
      return { icon: "rainy-5", explanation: "Moderate drizzle" };
    case 55:
      return { icon: "rainy-6", explanation: "Heavy drizzle" };
    case 56:
      return { icon: "rainy-4", explanation: "Freezing light drizzle" };
    case 57:
      return { icon: "rainy-6", explanation: "Freezing steady drizzle" };
    case 61:
      return { icon: "rainy-4", explanation: "Light raining" };
    case 63:
      return { icon: "rainy-5", explanation: "Moderate raining" };
    case 65:
      return { icon: "rainy-6", explanation: "Heavy raining" };
    case 66:
      return { icon: "rainy-4", explanation: "Freezing light rain" };
    case 67:
      return { icon: "rainy-6", explanation: "Freezing steady rain" };
    case 71:
      return { icon: "snowy-4", explanation: "Light snow" };
    case 73:
      return { icon: "snowy-5", explanation: "Moderate snow" };
    case 75:
    case 77:
      return { icon: "snowy-6", explanation: "Heavy snow" };
    case 80:
      return { icon: "rainy-4", explanation: "Light rain showers" };
    case 81:
      return { icon: "rainy-5", explanation: "Moderate rain showers" };
    case 82:
      return { icon: "rainy-6", explanation: "Heavy rain showers" };
    case 85:
      return { icon: "snowy-4", explanation: "Light snow flurries" };
    case 86:
      return { icon: "snowy-6", explanation: "Steady snow flurries" };
    case 95:
      return { icon: "thunder", explanation: "Thunderstorm" };
    case 96:
      return { icon: "thunder", explanation: "Thunderstorm and light hail" };
    case 99:
      return { icon: "thunder", explanation: "Thunderstorm and heavy hail" };
    default:
      return { icon: "day", explanation: "The end times are here" };
  }
};
