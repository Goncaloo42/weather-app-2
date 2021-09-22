import Card from "../ui/Card";

import classes from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
  return (
    <Card className={classes.card}>
      <div>{props.currentWeather.location}</div>
      <div>{props.currentWeather.date}</div>
      <div>{props.currentWeather.temperature}</div>
      <div>{props.currentWeather.tempMax}</div>
      <div>{props.currentWeather.tempMin}</div>
      <div>{props.currentWeather.description}</div>
      <div>
        {props.currentWeather.windSpeed} m/s{" "}
        {props.currentWeather.windDirection}
      </div>
      <div>{props.currentWeather.iconCode}</div>
    </Card>
  );
};
export default CurrentWeather;
