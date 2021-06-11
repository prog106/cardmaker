import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onclick }) => {
    return (
        <button className={styles.button} onClick={onclick}>
            {name}
        </button>
    );
};

export default Button;
