import React from 'react';
import styles from './HeaderWithUser.module.css';

const HeaderWithUser = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>DNV Healthcare</h1>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>KM</div>
          <span className={styles.userName}>Katherine Martinez</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithUser;