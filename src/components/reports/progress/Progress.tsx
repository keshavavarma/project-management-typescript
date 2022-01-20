import React from "react";
import styles from "./Progress.module.css";
const Progress = () => {
  return (
    <div className={styles.progress}>
      <p className={styles.heading}>Tim Progress</p>
      <div className={styles.progressList}>
        <div className={styles.progressCard}></div>
        <div className={styles.progressCard}></div>
        <div className={styles.progressCard}></div>
      </div>
    </div>
  );
};

export default Progress;
