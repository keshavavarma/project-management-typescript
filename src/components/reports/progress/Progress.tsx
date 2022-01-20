import React from "react";
import styles from "./Progress.module.css";
import ProgressCard from "./ProgressCard";
const Progress = () => {
  return (
    <div className={styles.progress}>
      <p className={styles.heading}>Tim Progress</p>
      <div className={styles.progressList}>
        <ProgressCard name="Margaret" task="UI Design" />
        <ProgressCard name="Carol" task="Prepare file" />
        <ProgressCard name="Andica" task="UX Research" />
      </div>
    </div>
  );
};

export default Progress;
