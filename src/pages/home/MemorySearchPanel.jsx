import React, { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startFetchAllUserMemories } from "./../../actions/memoryActions";

const MemorySearchPanel = () => {
  const dispatch = useDispatch();
  const [searchMethod, setSearchMethod] = useState("search-by-owner-email");
  const { uid } = useSelector((state) => state.auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchMethodChange = (e) => {
    e.preventDefault();
    const { id } = e.target;
    setSearchMethod(id);
  };

  const handleSearchAllUserMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllUserMemories(uid));
  };

  const handleSearchPublicMemories = (e) => {
    e.preventDefault();
  };
  const handleSearchProtectedMemories = (e) => {
    e.preventDefault();
  };
  const handleSearchPrivateMemories = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment className="search-panel__container">
      <form
        className="search-panel__main-container"
        onSubmit={handleFormSubmit}
      >
        <h2 className="search-panel__title text-center">Buscar un recuerdo</h2>

        <div className="search-panel__option-group">
          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-owner-email"
              checked
              onChange={handleSearchMethodChange}
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-owner-email"
            >
              Buscar recuerdos de un usuario específico
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="search-panel__input"
            />
          </div>

          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-name-or-tag"
              onChange={handleSearchMethodChange}
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-email"
            >
              Buscar recuerdos por nombre del recuerdo o etiqueta
            </label>
            <input
              type="text"
              name="nameOrTag"
              id="nameOrTag"
              className="search-panel__input"
            />
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
            <button
              onClick={handleSearchAllUserMemories}
              className="search-panel__input search-panel__input--submit"
              value="Todos Mis recuerdos"
            >
              Buscar todos tus recuerdos
            </button>
          </div>
          <div className="search-panel__search-option">
            <button
              onClick={handleSearchPublicMemories}
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos protegidos"
            >
              Buscar todos tus recuerdos públicos
            </button>
          </div>
          <div className="search-panel__search-option">
            <button
              onClick={handleSearchProtectedMemories}
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos protegidos"
            >
              Buscar todos tus recuerdos protegidos
            </button>
          </div>
          <div className="search-panel__search-option">
            <button
              onClick={handleSearchPrivateMemories}
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos protegidos"
            >
              Buscar todos tus recuerdos privados
            </button>
          </div>
          <div className="search-panel__search-option">
            <button
              type="submit"
              className="search-panel__input search-panel__input--submit"
              value="Mis recuerdos privados"
            >
              Buscar todos los recuerdos compartidos contigo
            </button>
          </div>
        </div>
        <button className="search-panel__search-button">Buscar</button>
      </form>
    </Fragment>
  );
};

export default MemorySearchPanel;
