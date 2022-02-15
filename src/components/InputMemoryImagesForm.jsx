import React from "react";
import ErrorFlag from "./ErrorFlag";

const InputMemoryImagesForm = ({
  formValues,
  handleInputChange,
  errorsState,
  setErrorsState,
  handleInputValidation,
  handleSelectImageToLoad,
  memoryPhotoList,
}) => {
  const { memoryPhotoText, memoryPhotoImg, memoryPhotoDescription } =
    formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="memory-form__image-list-container">
      <h3 className="text-center">Ingreso de fotos para tu recuerdo</h3>
      {memoryPhotoList.length === 0 && (
        <ErrorFlag
          message="Aún no has ingresado imágenes para tu recuerdo, ingresa al menos una"
          color="blue"
        />
      )}
      {}
      <form className="memory-form__input-image-container">
        <div className="memory-form__input-container">
          <label htmlFor="memoryPhotoText" className="memory-form__input-label">
            Nombre de la foto
          </label>
          <input
            type="text"
            name="memoryPhotoText"
            placeholder="Opcional"
            id="memoryPhotoText"
            className="memory-form__input"
            autoComplete="off"
            value={memoryPhotoText}
            onChange={handleInputValidation}
          />
        </div>
        <div className="memory-form__error-flag mt-2 mb-4">
          {errorsState.memoryPhotoText.hasErrors && (
            <ErrorFlag
              message={errorsState.memoryPhotoText.message}
              color="red"
            />
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
            placeholder="Opcional"
          ></textarea>
        </div>
        <div className="memory-form__error-flag mt-2 mb-4">
          {errorsState.memoryPhotoDescription.hasErrors && (
            <ErrorFlag
              message={errorsState.memoryPhotoDescription.message}
              color="red"
            />
          )}
        </div>
        <div className="memory-form__image-container">
          <button
            className="memory-form__image-button memory-form__input-image-button-container"
            id="upload-img-button"
            onClick={handleSelectImageToLoad}
          >
            Carga una imágen
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
        <div className="memory-form__input-image-button-container">
          <button
            onClick={handleSubmit}
            className="memory-catalog__visit-memory-button memory-form__input-image-button"
          >
            Ingresar
          </button>
        </div>
      </form>
      <label id="url-uploaded-img"></label>
      <div className="memory-form__error-flag mt-2 mb-4">
        {errorsState.memoryPhotoImg.hasErrors && (
          <ErrorFlag message={errorsState.memoryPhotoImg.message} color="red" />
        )}
        <h5 className="text-center">(Previsualización)</h5>
        <img
          src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
          className="memory-image-preview--no-content"
          id="memory-image-preview"
          alt=" "
        />{" "}
        <a
          href="#"
          target="_blank"
          className="memory-form__url-image-label"
          id="memory-image-preview-url"
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
  );
};

export default InputMemoryImagesForm;
