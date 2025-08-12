import React from 'react';
import styles from './HeaderWithoutUser.module.css';

const HeaderWithoutUser = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>DNV Healthcare</h1>
      </div>
    </header>
  );
};

export default HeaderWithoutUser;