import React from "react";
import Button from "../button/button";
import Imageinput from "../imageinput/imageinput";
import styles from "./editor.module.css";

const Item = ({ item, onDelete }) => {
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(item);
    };
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={item.name}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={item.company}
            />
            <select className={styles.select} name="theme" value={item.theme}>
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={item.title}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={item.email}
            />
            <textarea className={styles.textarea} name="message">
                {item.message}
            </textarea>
            <div className={styles.fileinput}>
                <Imageinput />
            </div>
            <div className={styles.button}>
                <Button name="DELETE" onclick={handleDelete} />
            </div>
        </form>
    );
};

export default Item;
