import React from "react";
import styles from "./controls.module.scss";

function Controls({ children }) {
  return <menu className={styles.container}>{children}</menu>;
}

export default Controls;
