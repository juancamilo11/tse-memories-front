import React, { Fragment } from "react";

const MemorySearchPanel = () => {
  return (
    <Fragment className="search-panel__container">
      <form className="search-panel__main-container">
        <h2 className="search-panel__title text-center">Buscar un recuerdo</h2>
        <div className="search-panel__option-group">
          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-email"
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-email"
            >
              Buscar recuerdos de un usuario específico
            </label>
            <input type="text" name="" id="" className="search-panel__input" />
          </div>
          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-email"
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-email"
            >
              Buscar recuerdos por nombre del recuerdo o etiqueta
            </label>
            <input type="text" name="" id="" className="search-panel__input" />
          </div>
          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-email"
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-email"
            >
              Buscar todos los recuerdos compartidos conmigo
            </label>
            <input type="text" name="" id="" className="search-panel__input" />
          </div>
        </div>
        <div className="search-panel__option-group">
          <div className="search-panel__search-option">
            <label
              className="search-panel__search-option-label v-hidden"
              htmlFor="search-by-email"
            >
              Ó también puedes...
            </label>
            <input
              type="submit"
              id=""
              className="search-panel__input"
              value="Mis recuerdos públicos"
            />
          </div>
          <div className="search-panel__search-option">
            <input
              type="submit"
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos protegidos"
            />
          </div>
          <div className="search-panel__search-option">
            <input
              type="submit"
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos privados"
            />
          </div>
        </div>
        <button className="search-panel__search-button">Buscar</button>
      </form>
    </Fragment>
  );
};

export default MemorySearchPanel;
