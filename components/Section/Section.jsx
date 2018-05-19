import React from 'react';

const styles = {};

const propTypes = {};

const defaultProps = {};

const Section = ({ title, header, children, labels = [] }) => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {header && <div className={header}}
    </header>
    <div className={styles.labels}
    <div className={styles.content} />
  </section>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
Section.displayName = 'Section';

export default Section;
