import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  formInitialErrorState,
  formInitialValues,
  isTheTagAlreadyDefined,
  memoryFormSubmitValidation,
  memoryFormValidator,
  visibilityTypes,
} from "../../helpers/memoryForm/memoryFormValidation";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import MemoryTagList from "../../components/MemoryTagList";
import InputMemoryImagesForm from "../../components/InputMemoryImagesForm";
import { sweetalertForInputTagAlreadyDefinedBuilder } from "../../helpers/sweetAlertBuilder";

const MemoryActualizationForm = () => {
  const { uid: userId } = useSelector((state) => state.auth);
  const [formValues, handleInputChange, resetForm] = useForm(formInitialValues);
  const [errorsState, setErrorsState] = useState(formInitialErrorState);

  const { activeMemoryToUpdate } = useSelector((state) => state.memories);

  const [tagList, setTagList] = useState([]);
  const [memoryPhotoList, setMemoryPhotoList] = useState([]);

  const dispatch = useDispatch();

  const { id, name, memoryDate, creationDate, visibility, tag, country, city } =
    formValues;

  const handleAddNewTag = (e) => {
    e.preventDefault();
    const tagValue = document.getElementById("tag").value.trim();
    const cleanEvent = { target: { name: "tag", value: "" } };
    if (tagValue === "" || errorsState.tag.hasErrors) return;
    if (isTheTagAlreadyDefined(tagValue, tagList, setErrorsState)) {
      sweetalertForInputTagAlreadyDefinedBuilder(tagValue);
      return;
    }
    setTagList([...tagList, tagValue]);
    handleInputValidation(cleanEvent);
  };

  const handleInputValidation = (e) => {
    handleInputChange(e);
    memoryFormValidator(
      e,
      setErrorsState,
      userId,
      activeMemoryToUpdate.memoryId,
      setMemoryPhotoList
    );
  };

  const handleMemoryFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleResetForm = (e) => {
    e.preventDefault();
  };

  const handleSelectImageToLoad = (e) => {
    e.preventDefault();
    const { id } = e.target;
    document.getElementById("memory-form__input-image").click();
  };

  const getLocalDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
    <div className="memory-form__main-container">
      <div className="memory-form__header-info">
        <div className="memory-form__id-container">
          <b className="memory-form__id-label">Identificador</b>
          <div className="memory-form__id-content">
            <b className="memory-form__id-value">{id || `${uuidv4()}`}</b>
            <button className="memory-form__id-copy-button">
              <i className="fas fa-copy memory-form__id-copy"></i>
            </button>
          </div>
        </div>

        <div className="memory-form__creation-date-container">
          <p className="memory-form__creation-date-label">Fecha de creación</p>
          <b className="memory-form__creation-date-value">
            {creationDate || getLocalDate()}
          </b>
        </div>
      </div>

      <form onSubmit={handleMemoryFormSubmit}>
        <div className="memory-form__command-buttons">
          <button className="memory-form__command-button">Visualizar</button>
          <button className="memory-form__command-button">Guardar</button>
        </div>
        <div className="memory-form__form-container">
          <div className="memory-form__inputs-container">
            <div className="memory-form__input-container">
              <label htmlFor="name" className="memory-form__input-label">
                Nombre del recuerdo
              </label>
              <input
                type="text"
                autoFocus="true"
                name="name"
                id="name"
                className="memory-form__input"
                autoComplete="off"
                value={name}
                onChange={handleInputValidation}
              />
              <input
                type="date"
                name="memoryDate"
                id="memoryDate"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={memoryDate}
                onChange={handleInputValidation}
              />
            </div>
            <div className="memory-form__error-flag">
              {errorsState.memoryDate.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.memoryDate.message ||
                    "Error: Error de prueba de name"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.name.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.name.message ||
                    "Error: Error de prueba de memoryDate"
                  }
                  color="red"
                />
              )}
            </div>

            <div className="memory-form__input-container">
              <label htmlFor="country" className="memory-form__input-label">
                País y ciudad
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="memory-form__input"
                autoComplete="off"
                value={country}
                onChange={handleInputValidation}
              />

              <input
                type="text"
                name="city"
                id="city"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={city}
                onChange={handleInputValidation}
              />
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.country.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.country.message ||
                    "Error, mensaje de prueba de country"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.city.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.city.message ||
                    "Error, mensaje de prueba de city"
                  }
                  color="red"
                />
              )}
            </div>

            <div className="memory-form__input-container">
              <label htmlFor="tag" className="memory-form__input-label">
                Palabras clave
              </label>
              <input
                type="text"
                name="tag"
                id="tag"
                className="memory-form__input memory-form__input-tag"
                autoComplete="off"
                value={tag}
                onChange={handleInputValidation}
              />
              <button
                onClick={handleAddNewTag}
                className="memory-form__input memory-form__button-input-tag btn btn-primary"
                disabled={errorsState.tag.hasErrors}
                type="button"
                disabled={tagList.length >= 25}
              >
                Ingresar
              </button>
              <select
                name="visibility"
                id="visibility"
                className="memory-form__input memory-form__input--secundary"
                autoComplete="off"
                value={visibility}
                onChange={handleInputValidation}
              >
                <option value="NN" selected>
                  Seleccione la visibilidad
                </option>
                {visibilityTypes.map((visibility) => (
                  <option value={visibility.type}>{visibility.label}</option>
                ))}
              </select>
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.tag.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.tag.message || "Error, error de prueba de tag"
                  }
                  color="red"
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.visibility.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.visibility.message ||
                    "Error, error de prueba de visibility"
                  }
                  color="red"
                />
              )}
            </div>
          </div>

          <MemoryTagList tagList={tagList} setTagList={setTagList} />

          <InputMemoryImagesForm
            formValues={formValues}
            handleInputChange={handleInputChange}
            errorsState={errorsState}
            setErrorsState={setErrorsState}
            handleInputValidation={handleInputValidation}
            handleSelectImageToLoad={handleSelectImageToLoad}
            memoryPhotoList={memoryPhotoList}
          />
        </div>
      </form>
    </div>
  );
};

export default MemoryActualizationForm;
