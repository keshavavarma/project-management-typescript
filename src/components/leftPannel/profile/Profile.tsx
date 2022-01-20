import React from "react";
import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.imgContainer}></div>
      <div className={styles.name}>Gorgio Stand</div>
      <div className={styles.email}>Gorgio.stand@gmail.com</div>
    </div>
  );
};

export default Profile;
