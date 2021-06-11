import React from "react";
import styles from "./preview.module.css";

const Item = ({ item }) => {
    const DEFAULT_PROFILE = "/images/default.jpg";
    function getStyles(theme) {
        switch (theme) {
            case "dark":
                return styles.dark;
            case "light":
                return styles.light;
            case "colorful":
                return styles.colorful;
            default:
                throw new Error(theme);
        }
    }
    return (
        <li className={`${styles.card} ${getStyles(item.theme)}`}>
            <img
                src={item.fileURL || DEFAULT_PROFILE}
                alt=""
                className={styles.profile}
            />
            <div className={styles.info}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.email}>{item.email}</span>
                <span className={styles.message}>{item.message}</span>
            </div>
        </li>
    );
};

export default Item;
