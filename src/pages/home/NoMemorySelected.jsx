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
        <h1 className="text-center">¡Bienvenid@ {auth.name}!</h1>
        <br />
        <h5 className="text-center">No has seleccionado aún ningún recuerdo</h5>
      </div>
    </div>
  );
};

export default NoMemorySelected;
