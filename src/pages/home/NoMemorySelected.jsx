import React from "react";
import { useSelector } from "react-redux";

const NoMemorySelected = () => {
  const { auth } = useSelector((state) => state);
  return (
    <div className="nothing-selected__main-container">
      <img
        className="nothing-selected__welcome-img"
        src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1643961997/store-catalog/welcome_x41vlw.png"
        alt="welcome"
      />
      <div className="nothing-selected__welcome-message text-center">
        <h1 className="text-center" style={{ padding: "10px" }}>
          ¡Hola, {auth.name}!
        </h1>
        <br />
        <h3 className="text-center" style={{ marginTop: "-15px" }}>
          No has seleccionado aún ningún recuerdo
        </h3>
      </div>
    </div>
  );
};

export default NoMemorySelected;
