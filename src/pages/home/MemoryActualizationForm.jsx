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
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const MemoryActualizationForm = () => {
  const [formValues, handleInputChange, resetForm] = useForm(formInitialValues);
  const [errorsState, setErrorsState] = useState(formInitialErrorState);

  const { activeMemoryToUpdate } = useSelector((state) => state.memories);

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

  const handleSelectImageToLoad = (e) => {
    e.preventDefault();
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
              {!errorsState.memoryDate.hasErrors && (
                <ErrorFlag
                  message={
                    errorsState.memoryDate.message || "Error: Error de prueba"
                  }
                />
              )}
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {!errorsState.name.hasErrors && (
                <ErrorFlag
                  message={errorsState.name.message || "Error: Error de prueba"}
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

              <div className="memory-form__error-flag mt-2 mb-4">
                {errorsState.country.hasErrors && (
                  <ErrorFlag message={errorsState.country.message} />
                )}
              </div>
              <div className="memory-form__error-flag mt-2 mb-4">
                {errorsState.city.hasErrors && (
                  <ErrorFlag message={errorsState.city.message} />
                )}
              </div>
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
              <div className="memory-form__error-flag mt-2 mb-4">
                {errorsState.visibility.hasErrors && (
                  <ErrorFlag message={errorsState.visibility.message} />
                )}
              </div>
            </div>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.name.hasErrors && (
                <ErrorFlag message={errorsState.name.message} />
              )}
            </div>
          </div>
          <div className="memory-form__tag-list-container">
            <h3 className="memory-form__tag-list-title text-center">
              Lista de palabras claves (Etiquetas) de tu viaje
            </h3>
            <div className="memory-form__tag-list">
              {tagList.map((tag) => (
                //Crear el componente tag con el ícono de la basura
                <p>{tag}</p>
              ))}
            </div>
          </div>

          <div className="memory-form__image-list-container">
            <div className="memory-form__input-image-container">
              <div className="memory-form__input-container">
                <label
                  htmlFor="memoryPhotoText"
                  className="memory-form__input-label"
                >
                  Nombre de la foto
                </label>
                <input
                  type="text"
                  name="memoryPhotoText"
                  id="memoryPhotoText"
                  className="memory-form__input"
                  autoComplete="off"
                  value={memoryPhotoText}
                  onChange={handleInputValidation}
                />
              </div>
              <div className="memory-form__error-flag mt-2 mb-4">
                {errorsState.memoryPhotoText.hasErrors && (
                  <ErrorFlag message={errorsState.memoryPhotoText.message} />
                )}
              </div>
              <div className="memory-form__input-container">
                <label
                  htmlFor="memoryPhotoDescription"
                  className="memory-form__input-label"
                >
                  Decripción
                </label>
                <textarea
                  name="memoryPhotoDescription"
                  id="memoryPhotoDescription"
                  className="memory-form__input memory-form__input--textarea"
                  autoComplete="off"
                  value={memoryPhotoDescription}
                  onChange={handleInputValidation}
                ></textarea>
              </div>
              <div className="memory-form__error-flag mt-2 mb-4">
                {errorsState.memoryPhotoDescription.hasErrors && (
                  <ErrorFlag
                    message={errorsState.memoryPhotoDescription.message}
                  />
                )}
              </div>

              <div className="memory-form__image-container">
                <button
                  className="memory-form__image-button"
                  id="upload-img-button"
                  onClick={handleSelectImageToLoad}
                >
                  Carga un archivo
                </button>
                <input
                  type="file"
                  name="memoryPhotoImg"
                  className="memory-form__input-image"
                  id="memory-form__input-image"
                  value={memoryPhotoImg}
                  onChange={handleInputValidation}
                />
              </div>
            </div>
            <label id="url-uploaded-img"></label>
            <div className="memory-form__error-flag mt-2 mb-4">
              {errorsState.memoryPhotoImg.hasErrors && (
                <ErrorFlag
                  message={errorsState.memoryPhotoImg.message}
                  width="100%"
                />
              )}
              <img
                src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
                className="uploaded-img-preview--no-content"
                id="uploaded-img-preview"
                alt=" "
              />{" "}
              <a
                href="#"
                target="_blank"
                className="memory-form__url-image-label"
                id="uploaded-img-preview-url"
              ></a>
            </div>

            <h3 className="memory-form__image-list-title text-center">
              Lista de imágenes de tu viaje
            </h3>
            <div className="memory-form__images-list">
              {memoryPhotoList.map((memoryPhoto) => (
                //Recordar subir las imágenes una vez que se suben a cloudinary
                //Crear el componente para mostrar la foto, la descripción, y el título
                <p>{JSON.stringify(memoryPhoto)}</p>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemoryActualizationForm;
