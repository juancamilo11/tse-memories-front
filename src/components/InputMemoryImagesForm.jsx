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
    window.alert("enviando form");
  };

  return (
    <div className="memory-form__image-list-container">
      <h2 className="text-center">Ingreso de fotos para tu recuerdo</h2>
      {memoryPhotoList.length === 0 && (
        <ErrorFlag
          message="Aún no has ingresado imágenes para tu recuerdo, ingresa por lo menos una"
          color="blue"
        />
      )}
      <form className="memory-form__input-image-container">
        <div className="memory-form__input-container">
          <label htmlFor="memoryPhotoText" className="memory-form__input-label">
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
        <div className="memory-form__input-image-button-container">
          <button
            onClick={handleSubmit}
            className="memory-catalog__visit-memory-button memory-form__input-image-button"
          >
            Ingresar imágen
          </button>
        </div>
      </form>
      <label id="url-uploaded-img"></label>
      <div className="memory-form__error-flag mt-2 mb-4">
        {errorsState.memoryPhotoImg.hasErrors && (
          <ErrorFlag message={errorsState.memoryPhotoImg.message} color="red" />
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
  );
};

export default InputMemoryImagesForm;
