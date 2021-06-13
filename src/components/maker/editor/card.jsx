import React, { useState } from "react";
import Button from "../button/button";
import styles from "./editor.module.css";

const Card = ({ ImageInput, card, onDelete, onModify }) => {
    const [inputs, setInputs] = useState(card);
    const handleModify = (event) => {
        event.preventDefault();
        onModify(inputs);
    };
    const handleDelete = (event) => {
        event.preventDefault();
        onDelete(card);
    };
    const onChange = (event) => {
        event.preventDefault();
        const { value, name } = event.currentTarget;
        setInputs({
            ...inputs,
            // [event.currentTarget.name]: event.currentTarget.value,
            [name]: value,
        });
    };
    const handleProfile = (profile) => {
        setInputs({
            ...inputs,
            fileName: profile.original_filename,
            fileURL: profile.url,
        });
    };
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={inputs.name}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={inputs.company}
                onChange={onChange}
            />
            <select
                className={styles.select}
                name="theme"
                value={card.theme}
                onChange={onChange}
            >
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={inputs.title}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={inputs.email}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                name="message"
                onChange={onChange}
            >
                {inputs.message}
            </textarea>
            <div className={styles.fileinput}>
                <ImageInput
                    onProfile={handleProfile}
                    filename={inputs.fileName}
                />
            </div>
            <div className={styles.button}>
                <Button name="MODIFY" onclick={handleModify} />
                <Button name="DELETE" onclick={handleDelete} />
            </div>
        </form>
    );
};

export default Card;
