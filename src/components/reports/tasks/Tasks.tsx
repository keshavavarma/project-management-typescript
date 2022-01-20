import React from "react";
import styles from "./Tasks.module.css";
const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.tabs}>
        <div className={styles.tab}>In Progress</div>
        <div className={styles.tab}>In Review</div>
        <div className={styles.tab}>Completed</div>
      </div>
      <div className={styles.taskList}>
        <div className={styles.task}></div>
        <div className={styles.task}></div>
      </div>
    </div>
  );
};

export default Tasks;
