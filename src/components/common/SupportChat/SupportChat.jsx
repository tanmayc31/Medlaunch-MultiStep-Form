import React from 'react';
import styles from './SupportChat.module.css';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const SupportChat = () => {
  return (
    <button className={styles.supportChat}>
      <ManageAccountsOutlinedIcon className={styles.icon}/>
      
      <span className={styles.text}>Support Chat</span>
    </button>
  );
};

export default SupportChat;