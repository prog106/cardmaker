import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Business Card Maker</span>
    </header>
  );
}

export default Header;
