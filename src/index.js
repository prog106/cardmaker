import React from "react";
import ReactDOM from "react-dom";
// import styles from "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import Imageinput from "./components/maker/imageinput/imageinput";

const authService = new AuthService();
const imageUploader = new ImageUploader();

// component dependency injection
const ImageInput = (props) => {
    return <Imageinput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
    <React.StrictMode>
        <App ImageInput={ImageInput} authService={authService} />
    </React.StrictMode>,
    document.getElementById("root")
);
