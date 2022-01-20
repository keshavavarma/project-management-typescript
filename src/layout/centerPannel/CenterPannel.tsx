import React from "react";
import Analytics from "../../components/reports/analytics/Analytics";
import Description from "../../components/reports/description/Description";
import Progress from "../../components/reports/progress/Progress";
import Tasks from "../../components/reports/tasks/Tasks";
import styles from "./CenterPannel.module.css";
const CenterPannel = () => {
  return (
    <div className={styles.center}>
      <div className={styles.heading}>Reports</div>
      <div className={styles.centerPannel}>
        <div className={styles.columnOne}>
          <Description />
          <Tasks />
        </div>
        <div className={styles.columnTwo}>
          <Analytics />
          <Progress />
        </div>
      </div>
    </div>
  );
};

export default CenterPannel;
