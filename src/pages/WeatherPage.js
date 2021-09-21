import { DUMMY_CURRENT } from "../DUMMY_DATA";
import CurrentWeather from "../components/weather/CurrentWeather";

const WeatherPage = () => {
  return (
    <div>
      Weather Page
      <CurrentWeather currentWeather={DUMMY_CURRENT} />
    </div>
  );
};
export default WeatherPage;
