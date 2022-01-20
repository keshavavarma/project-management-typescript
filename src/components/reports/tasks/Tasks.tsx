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
        <div className={styles.task}>
          <div className={styles.meta}>
            <div className={styles.imgContainer}></div>
            <div className={styles.name}>
              <h4>Figma</h4>
              <p>Figma Community</p>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            at!
          </p>
          <button className={styles.btn}>Finish Task</button>
        </div>
        <div className={styles.task}>
          <div className={styles.meta}>
            <div className={styles.imgContainer}></div>
            <div className={styles.name}>
              <h4>Figma</h4>
              <p>Figma Community</p>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            at!
          </p>
          <button className={styles.btn}>Finish Task</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
