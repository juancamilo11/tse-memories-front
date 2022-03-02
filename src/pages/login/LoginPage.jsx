import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/authActions";
import pickRandomImage from "../../helpers/login/portraitImagesList";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  return (
    <div className="login__main-container">
      <div className="login__sidebar">
        <div className="login__welcome-section">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/login/login-sidebar-img.png"
            }
            className="login__welcome-section-img"
            alt="logo"
          />
          <h2 className="login__welcome-section-title">
            TAKE IT
            <br />
            SHARE IT
            <br />
            ENJOY IT
          </h2>
        </div>
        <div className="login__login-buttons-section">
          <button
            onClick={handleLoginWithGoogle}
            className="login__button-login login__button-google"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/login/google-img-button.png"
              }
              className="login__login-buttons-img"
              alt="google-login"
            />
            <span className="login__login-button-text">
              Ingresar con Google
            </span>
          </button>
        </div>
      </div>
      <div
        className="login__welcome-img-container"
        style={{
          backgroundImage: `url(${pickRandomImage()})`,
        }}
      >
        <section className="login__app-description">
          <h1 className="login__app-description-title">TSE Memories</h1>
          <h3 className="login__app-description-title">
            ¡Crea recuerdos y compartelos con quién quieras!
          </h3>
          <h6 className="login__app-description-title">
            ¡Ingresa y crea un mundo lleno de recuerdos tuyos!
          </h6>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
