import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
    return (
        <header className={styles.header}>
            <span className={styles.title}>Business Card Maker</span>
            {onLogout && (
                <button className={styles.logout} onClick={onLogout}>
                    ๋ก๊ทธ์์
                </button>
            )}
        </header>
    );
};

export default Header;
