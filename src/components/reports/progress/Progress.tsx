import React from "react";
import styles from "./Progress.module.css";
const Progress = () => {
  return (
    <div className={styles.progress}>
      <p className={styles.heading}>Tim Progress</p>
      <div className={styles.progressList}>
        <div className={styles.progressCard}>
          <div className={styles.meta}>
            <div className={styles.imgContainer}></div>
            <div className={styles.name}>
              <h4>Carrol</h4>
              <p>Prepare file</p>
            </div>
          </div>
        </div>
        <div className={styles.progressCard}>
          <div className={styles.meta}>
            <div className={styles.imgContainer}></div>
            <div className={styles.name}>
              <h4>Carrol</h4>
              <p>Prepare file</p>
            </div>
          </div>
        </div>
        <div className={styles.progressCard}>
          <div className={styles.meta}>
            <div className={styles.imgContainer}></div>
            <div className={styles.name}>
              <h4>Carrol</h4>
              <p>Prepare file</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
