import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const handleLogin = (event) => {
    authService
    .login(event.currentTarget.dataset.login)
    .then(console.log);
  }
  return (
    <section className={styles.wrap}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={handleLogin} data-login="Google">Google</button>
          </li>
          <li>
            <button onClick={handleLogin} data-login="Github">Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;