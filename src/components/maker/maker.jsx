import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "./preview/preview";
import Editor from "./editor/editor";
import styles from "./maker.module.css";

const Maker = ({ ImageInput, authService }) => {
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
            fileName: "default1",
            fileURL: "/images/default.jpg",
        },
        {
            id: 2,
            name: "test2",
            company: "movisoft",
            theme: "light",
            title: "software engineer",
            email: "test2@test.com",
            message: "hi",
            fileName: "default2",
            fileURL: "/images/default.jpg",
        },
    ]);
    const handleDelete = (data) => {
        const save = cards.filter((item) => item.id !== data.id);
        setCards(save);
    };
    const handleAdd = (data) => {
        const _cards = [...cards];
        _cards.push(data);
        setCards(_cards);
    };
    const handleModify = (data) => {
        const _cards = cards.map((item) => {
            if (item.id === data.id) return data;
            else return item;
        });
        setCards(_cards);
    };
    return (
        <section>
            <Header onLogout={handleLogout} />
            <div className={styles.container}>
                <div className={styles.maker}>
                    <Editor
                        ImageInput={ImageInput}
                        cards={cards}
                        onDelete={handleDelete}
                        onModify={handleModify}
                        onAdd={handleAdd}
                    />
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
