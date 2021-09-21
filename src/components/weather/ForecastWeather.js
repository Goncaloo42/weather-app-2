import classes from "./ForecastWeather.module.css";

const ForecastWeather = (props) => {
  return (
    <div className={classes.card}>
      <div>{props.forecastWeather.dayOfWeek}</div>
      <div>{props.forecastWeather.dayOfMonth}</div>

      <div>{props.forecastWeather.tempMax}</div>
      <div>{props.forecastWeather.tempMin}</div>
      <div>{props.forecastWeather.description}</div>
      <div>
        {props.forecastWeather.windSpeed} m/s{" "}
        {props.forecastWeather.windDirection}
      </div>
      <div>{props.forecastWeather.iconCode}</div>
    </div>
  );
};
export default ForecastWeather;
