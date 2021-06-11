import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";

const Login = ({ authService }) => {
    // 로그인 후 /maker 로 이동
    const history = useHistory();
    const goToMaker = (uid, name, email) => {
        history.push({
            pathname: "/maker",
            state: {
                uid: uid,
                name: name,
                email: email,
            },
        });
    };
    const handleLogin = (event) => {
        authService
            .login(event.currentTarget.dataset.login)
            .then((response) => {
                const user = response.user;
                goToMaker(user.uid, user.displayName, user.email);
            });
    };
    useEffect(() => {
        // 이미 로그인 되었는지 체크하기
        authService.logined((user) => {
            if (user) {
                goToMaker(user.uid, user.displayName, user.email);
            }
        });
    });
    return (
        <section>
            <Header />
            <section className={styles.container}>
                <span className={styles.title}>LOGIN</span>
                <ul>
                    <li>
                        <button
                            className={styles.login_btn}
                            onClick={handleLogin}
                            data-login="Google"
                        >
                            Google
                        </button>
                    </li>
                    <li>
                        <button
                            className={styles.login_btn}
                            onClick={handleLogin}
                            data-login="Github"
                        >
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;
