import React from "react";
import styles from "./editor.module.css";
import Item from "./item";

const Editor = ({ cards, onDelete }) => {
    return (
        <>
            <h1>Card Maker</h1>
            <ul>
                {cards.map((item) => (
                    <Item item={item} onDelete={onDelete} />
                ))}
            </ul>
        </>
    );
};

export default Editor;
