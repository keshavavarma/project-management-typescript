import React from "react";
import CreateTask from "../../components/leftPannel/createTask/CreateTask";
import Menu from "../../components/leftPannel/menu/Menu";
import Profile from "../../components/leftPannel/profile/Profile";
import styles from "./LeftPannel.module.css";
const LeftPannel = () => {
  return (
    <section className={styles.left}>
      <Profile />
      <Menu />
      <CreateTask />
    </section>
  );
};

export default LeftPannel;
