import React from "react";
import "./App.css";
import styles from "./assets/Base.module.scss";
import classes from "./assets/App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>APP</h1>
      <div className={classes.navigation}></div>
      <div className={classes.main}></div>
    </div>
  );
};

export default App;
