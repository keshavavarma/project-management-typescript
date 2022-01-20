import React from "react";
import styles from "./Progress.module.css";

type ProgressCardProp = {
  name: string;
  task: string;
};
const ProgressCard = ({ name, task }: ProgressCardProp) => {
  return (
    <div className={styles.progressCard}>
      <div className={styles.meta}>
        <div className={styles.imgContainer}></div>
        <div className={styles.name}>
          <h4>{name}</h4>
          <p>{task}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
