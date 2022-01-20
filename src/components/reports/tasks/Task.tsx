import React from "react";
import styles from "./Tasks.module.css";

type TaskProps = {
  name: string;
  caption: string;
  description: string;
};
const Task = ({ name, caption, description }: TaskProps) => {
  return (
    <div className={styles.task}>
      <div className={styles.meta}>
        <div className={styles.imgContainer}></div>
        <div className={styles.name}>
          <h4>{name}</h4>
          <p>{caption}</p>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.btn}>Finish Task</button>
    </div>
  );
};

export default Task;
