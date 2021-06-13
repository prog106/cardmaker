import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./editor.module.css";

const Add = ({ ImageInput, onAdd }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [profile, setProfile] = useState({
        fileName: "",
        fileURL: "",
    });
    const handleAdd = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || "",
            company: companyRef.current.value || "",
            theme: themeRef.current.value || "",
            title: titleRef.current.value || "",
            email: emailRef.current.value || "",
            message: messageRef.current.value || "",
            fileName: profile.fileName || "",
            fileURL: profile.fileURL || "",
        };
        onAdd(card);
        nameRef.current.value = "";
        companyRef.current.value = "";
        themeRef.current.value = "dark";
        titleRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    };
    const handleProfile = (profile) => {
        setProfile({
            fileName: profile.original_filename,
            fileURL: profile.url,
        });
    };
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                ref={nameRef}
                name="name"
                placeholder="Name"
            />
            <input
                className={styles.input}
                type="text"
                ref={companyRef}
                name="company"
                placeholder="Company"
            />
            <select className={styles.select} ref={themeRef} name="theme">
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
            <input
                className={styles.input}
                type="text"
                ref={titleRef}
                name="title"
                placeholder="title"
            />
            <input
                className={styles.input}
                type="text"
                ref={emailRef}
                name="email"
                placeholder="email"
            />
            <textarea
                className={styles.textarea}
                ref={messageRef}
                name="message"
                placeholder="message"
            ></textarea>
            <div className={styles.fileinput}>
                <ImageInput onProfile={handleProfile} />
            </div>
            <div className={styles.button}>
                <Button name="Add" onclick={handleAdd} />
            </div>
        </form>
    );
};

export default Add;
