import React from "react";
import styles from "./CreateTask.module.css";
const CreateTask = () => {
  return (
    <div className={styles.createTask}>
      <p className={styles.topSpan}>Create Task</p>
      <p className={styles.bottomSpan}>Create a new Task</p>
      <button className={styles.button}>+</button>
    </div>
  );
};

export default CreateTask;
