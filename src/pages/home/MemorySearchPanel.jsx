import React, { Fragment } from "react";
import validator from "validator";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  sweetalertForFetchingMemoriesBuilder,
  sweetalertForInvalidSearchValueBuilder,
} from "../../helpers/sweetAlertBuilder";
import useForm from "../../hooks/useForm";
import {
  startFetchAllUserMemories,
  startFetchAllUserPrivateMemories,
  startFetchAllUserProtectedMemories,
  startFetchAllUserPublicMemories,
  startFetchAllMemoriesSharedWithTheCurrentUser,
  startFetchAllSpecificUserMemoriesByEmail,
  startFetchAllMemoriesByNameOrTagname,
} from "./../../actions/memoryActions";

const MemorySearchPanel = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    nameOrTagName: "",
  });

  const { email, nameOrTagName } = formValues;

  const { uid } = useSelector((state) => state.auth);

  const handleSearchAllUserMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllUserMemories(uid));
    sweetalertForFetchingMemoriesBuilder();
  };

  const handleSearchPublicMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllUserPublicMemories(uid));
    sweetalertForFetchingMemoriesBuilder();
  };

  const handleSearchProtectedMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllUserProtectedMemories(uid));
    sweetalertForFetchingMemoriesBuilder();
  };

  const handleSearchPrivateMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllUserPrivateMemories(uid));
    sweetalertForFetchingMemoriesBuilder();
  };

  const handleSearchSharedMemories = (e) => {
    e.preventDefault();
    dispatch(startFetchAllMemoriesSharedWithTheCurrentUser(uid));
    sweetalertForFetchingMemoriesBuilder();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { checked: searchByEmail } = document.getElementById(
      "search-by-owner-email"
    );
    if (searchByEmail) {
      if (email === "" || !validator.isEmail(email)) {
        sweetalertForInvalidSearchValueBuilder(
          "El email no es corresponde a un correo electrónico de Google"
        );
        return;
      }
      dispatch(startFetchAllSpecificUserMemoriesByEmail(email));
    } else {
      dispatch(startFetchAllMemoriesByNameOrTagname(nameOrTagName));
    }
    sweetalertForFetchingMemoriesBuilder();
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
              value="search-by-owner-email"
              checked
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-owner-email"
            >
              Buscar recuerdos públicos de un usuario específico
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Ingrese el email del usuario"
              onChange={handleInputChange}
              className="search-panel__input"
            />
          </div>

          <div className="search-panel__search-option">
            <input
              className="search-panel__search-option-radio"
              type="radio"
              name="search-panel__search-method"
              id="search-by-name-or-tag"
              value="search-by-name-or-tag"
            />
            <label
              className="search-panel__search-option-label"
              htmlFor="search-by-name-or-tag"
            >
              Buscar recuerdos por nombre del recuerdo o etiqueta
            </label>
            <input
              type="text"
              name="nameOrTagName"
              id="nameOrTagName"
              placeholder="Ingrese el nombre o la etiqueta del recuerdo"
              onChange={handleInputChange}
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
              onClick={handleSearchSharedMemories}
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
