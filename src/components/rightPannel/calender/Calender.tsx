import React from "react";
import styles from "./Calender.module.css";
const Calender = () => {
  return (
    <div className={styles.calender}>
      <h3>March 2021</h3>
      <div className={styles.dates}></div>
    </div>
  );
};

export default Calender;
