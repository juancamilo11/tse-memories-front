import React from "react";

const Loader = () => {
  return (
    <div className="loading__loading-main-container">
      <div className="loader__loader-content">
        <h1 className="loader__loading-title">Cargando...</h1>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/loader/loading.svg"}
          className="loading__loader"
          alt="loading"
        />
      </div>
    </div>
  );
};

export default Loader;
