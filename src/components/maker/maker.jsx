import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "./preview/preview";
import Editor from "./editor/editor";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
    const history = useHistory();
    const handleLogout = () => {
        authService.logout(() => {
            history.push({
                pathname: "/",
            });
        });
    };
    useEffect(() => {
        authService.logined((user) => {
            if (!user) {
                history.push({
                    pathname: "/",
                });
            }
        });
    });
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "test1",
            company: "movisoft",
            theme: "dark",
            title: "software engineer",
            email: "test1@test.com",
            message: "hi",
            fileName: "",
            fileURL: "",
        },
        {
            id: 2,
            name: "test2",
            company: "movisoft",
            theme: "light",
            title: "software engineer",
            email: "test2@test.com",
            message: "hi",
            fileName: "",
            fileURL: "",
        },
    ]);
    const handleDelete = (data) => {
        const save = cards.filter((item) => item.id !== data.id);
        setCards(save);
    };
    return (
        <section>
            <Header onLogout={handleLogout} />
            <div className={styles.container}>
                <div className={styles.maker}>
                    <Editor cards={cards} onDelete={handleDelete} />
                </div>
                <div className={styles.preview}>
                    <Preview cards={cards} />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
