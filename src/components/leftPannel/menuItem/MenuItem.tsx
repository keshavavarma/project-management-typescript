import React from "react";
import styles from "./MenuItem.module.css";

type MenuItemProps = {
  children: React.ReactNode;
};
const MenuItem = ({ children }: MenuItemProps) => {
  return <div className={styles.menuItem}>{children}</div>;
};

export default MenuItem;
