import React from "react";
import MenuItem from "../menuItem/MenuItem";
import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem>Reports</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Log out</MenuItem>
    </div>
  );
};

export default Menu;
