import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Weather App</div>
      <nav>
        <ul>
          <li>Weather</li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
