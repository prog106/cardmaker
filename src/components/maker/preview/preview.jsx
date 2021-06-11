import React from "react";
import Item from "./item";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
    return (
        <>
            <h1>Card Preview</h1>
            <ul className={styles.cards}>
                {cards.map((item) => (
                    <Item item={item} />
                ))}
            </ul>
        </>
    );
};

export default Preview;
