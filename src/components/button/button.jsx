import React from "react";
import styles from "./button.module.scss";

function Button({ children }) {
  return (
    <button className={styles.button}>
      <span className={styles.container}>{children}</span>
    </button>
  );
}

export default Button;
