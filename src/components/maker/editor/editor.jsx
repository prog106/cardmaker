import React from "react";
import Add from "./add";
// import styles from "./editor.module.css";
import Card from "./card";

const Editor = ({ ImageInput, cards, onDelete, onModify, onAdd }) => {
    return (
        <>
            <h1>Card Maker</h1>
            <ul>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        ImageInput={ImageInput}
                        card={card}
                        onDelete={onDelete}
                        onModify={onModify}
                    />
                ))}
                {<Add ImageInput={ImageInput} onAdd={onAdd} />}
            </ul>
        </>
    );
};

export default Editor;
