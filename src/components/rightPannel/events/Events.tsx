import React from "react";
import styles from "./Events.module.css";
const Events = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Saturday,<span>30 Mar</span>
      </h3>
      <div className={styles.events}>
        <div className={styles.timeline}></div>
        <div className={styles.eventList}>
          <div className={styles.event}></div>
          <div className={styles.event}></div>
          <div className={styles.event}></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
