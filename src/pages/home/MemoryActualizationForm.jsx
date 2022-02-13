import React, { useReducer, useState } from "react";
import ErrorFlag from "../../components/ErrorFlag";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  formInitialErrorState,
  formInitialValues,
  memoryFormSubmitValidation,
  memoryFormValidator,
  visibilityTypes,
} from "../../helpers/memoryForm/memoryFormValidation";

const MemoryActualizationForm = () => {
  const [formValues, handleInputChange, resetForm] = useForm(formInitialValues);
  const [errorsState, setErrorsState] = useState(formInitialErrorState);

  const dispatch = useDispatch();

  const {
    id,
    name,
    memoryDate,
    creationDate,
    visibility,
    tag,
    tagList,
    memoryPhotoText,
    memoryPhotoImg,
    memoryPhotoDescription,
    memoryPhotoList,
    country,
    city,
  } = formValues;

  const handleAddNewTag = (e) => {
    e.preventDefault();
  };

  const handleInputValidation = (e) => {
    e.preventDefault();
    handleInputChange(e);
  };

  const handleMemoryFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleResetForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleMemoryFormSubmit}>
      <div className="memory-form__form-container">
        <div className="memory-form__inputs-container">
          <div className="memory-form__input-container">
            <label htmlFor="name" className="store-setup__input-label">
              Nombre de la tienda
            </label>
            <input
              type="text"
              autoFocus="true"
              name="name"
              id="name"
              className="store-setup__input"
              autoComplete="off"
              value={name}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.name.hasErrors && (
              <ErrorFlag message={errorsState.name.message} />
            )}
          </div>

          <div className="memory-form__input-container">
            <label htmlFor="country" className="store-setup__input-label">
              País y ciudad
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="store-setup__input"
              autoComplete="off"
              value={country}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.country.hasErrors && (
              <ErrorFlag message={errorsState.country.message} />
            )}
          </div>

          <div className="memory-form__input-container">
            <label htmlFor="tag" className="store-setup__input-label">
              Palabras clave
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              className="store-setup__input"
              autoComplete="off"
              value={tag}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.name.hasErrors && (
              <ErrorFlag message={errorsState.name.message} />
            )}
          </div>
        </div>
        <div className="memory-form__inputs-container">
          <div className="memory-form__input-container">
            <input
              type="date"
              name="memoryDate"
              id="memoryDate"
              className="store-setup__input"
              autoComplete="off"
              value={memoryDate}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.memoryDate.hasErrors && (
              <ErrorFlag message={errorsState.memoryDate.message} />
            )}
          </div>

          <div className="memory-form__input-container">
            <input
              type="text"
              name="city"
              id="city"
              className="store-setup__input"
              autoComplete="off"
              value={city}
              onChange={handleInputValidation}
            />
          </div>
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.city.hasErrors && (
              <ErrorFlag message={errorsState.city.message} />
            )}
          </div>

          <div className="memory-form__input-container">
            <select
              name="visibility"
              id="visibility"
              className="store-setup__input"
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
          <div className="store-setup__error-flag mt-2 mb-4">
            {errorsState.visibility.hasErrors && (
              <ErrorFlag message={errorsState.visibility.message} />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default MemoryActualizationForm;
