import React, { useRef, useState } from "react";
import styles from "./imageinput.module.css";

const Imageinput = ({ imageUploader, onProfile, filename }) => {
    const fileRef = useRef();
    const btnRef = useRef();
    const [loading, setLoading] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        fileRef.current.click();
    };
    const handleChange = async (event) => {
        event.preventDefault();
        setLoading(true);
        const imageupload = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        btnRef.current.textContent = imageupload.original_filename;
        onProfile({
            url: imageupload.url,
            original_filename: imageupload.original_filename,
        });
    };
    return (
        <div className={styles.container}>
            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                name="file"
                className={styles.upload}
                onChange={handleChange}
            />
            {!loading && (
                <button
                    ref={btnRef}
                    className={`${styles.button} ${
                        filename ? styles.pink : styles.purple
                    }`}
                    onClick={handleClick}
                >
                    {filename || "No File"}
                </button>
            )}
            {loading && <div className={styles.spin}></div>}
        </div>
    );
};
export default Imageinput;
