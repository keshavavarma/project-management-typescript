import React from "react";
import Task from "./Task";
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
        <Task
          name="Figma"
          caption="Figma community"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            at!"
        />
        <Task
          name="Dribble"
          caption="Dribble snapshot"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            at!"
        />
      </div>
    </div>
  );
};

export default Tasks;
