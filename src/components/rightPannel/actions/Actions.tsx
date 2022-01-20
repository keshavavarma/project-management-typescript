import React from "react";
import styles from "./Actions.module.css";
const Actions = () => {
  return (
    <div className={styles.actions}>
      <input type="search" className={styles.input} />
      <div className={styles.actionBtn} role="button"></div>
      <div className={styles.actionBtn} role="button"></div>
    </div>
  );
};

export default Actions;
