import classes from "./ForecastList.module.css";

const ForecastList = (props) => {
  return <div className={classes.list}>{props.children}</div>;
};

export default ForecastList;
