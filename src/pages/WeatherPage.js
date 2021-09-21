import { DUMMY_CURRENT } from "../DUMMY_DATA";
import { DUMMY_FORECAST } from "../DUMMY_DATA";
import CurrentWeather from "../components/weather/CurrentWeather";
import ForecastWeather from "../components/weather/ForecastWeather";
import ForecastList from "../components/weather/ForecastList";

const WeatherPage = () => {
  const mappedForecast = DUMMY_FORECAST.map((day) => {
    return <ForecastWeather key={day.dayOfMonth} forecastWeather={day} />;
  });

  return (
    <div>
      Weather Page
      <CurrentWeather currentWeather={DUMMY_CURRENT} />
      <ForecastList>{mappedForecast}</ForecastList>
    </div>
  );
};
export default WeatherPage;
