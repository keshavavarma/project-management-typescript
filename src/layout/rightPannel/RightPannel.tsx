import React from "react";
import Actions from "../../components/rightPannel/actions/Actions";
import Calender from "../../components/rightPannel/calender/Calender";
import Events from "../../components/rightPannel/events/Events";
import styles from "./RightPannel.module.css";
const RightPannel = () => {
  return (
    <section className={styles.right}>
      <Actions />
      <Calender />
      <Events />
    </section>
  );
};

export default RightPannel;
