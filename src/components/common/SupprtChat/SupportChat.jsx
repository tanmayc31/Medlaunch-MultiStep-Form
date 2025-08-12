import React from 'react';
import styles from './SupportChat.module.css';

const SupportChat = () => {
  return (
    <button className={styles.supportChat}>
      <span className={styles.icon}>💬</span>
      <span className={styles.text}>Support Chat</span>
    </button>
  );
};

export default SupportChat;