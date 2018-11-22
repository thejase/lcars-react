import React from 'react';
import Controls from '../controls';
import styles from './display.module.scss';

function Display({ children, title, controls }) {
  return <div className={styles.container}>
      <button className={styles.elbow}>
        <span className={styles['elbow-content']}>
          <span className={styles['elbow-label']}>Hello world</span>
        </span>
      </button>
      <h1 className={styles.title}>
        <span>{title}</span>
      </h1>
      <div className={styles.controls}>
        <Controls>{controls}</Controls>
      </div>
      <div className={styles.content}>{children}</div>
    </div>;
}

export default Display;
