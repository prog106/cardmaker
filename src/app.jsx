import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

const App = ({ ImageInput, authService }) => {
    return (
        <div className={styles.wrap}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login authService={authService} />
                    </Route>
                    <Route exact path="/maker">
                        <Maker
                            ImageInput={ImageInput}
                            authService={authService}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
