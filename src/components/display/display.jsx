import React from 'react';
import Controls from '../controls';
import styles from './display.module.scss';

function Display({ children, title, controls }) {
  return (
    <div className={styles.container}>
      <button class={styles.elbow}>
        <span class={styles['elbow-content']}>
          <span class={styles['elbow-label']}>Hello world</span>
        </span>
      </button>
      <h1 class={styles.title}>{title}</h1>
      <div class={styles.controls}>
        <Controls>{controls}</Controls>
      </div>
      <div class={styles.content}>{children}</div>
    </div>
  );
}

export default Display;
