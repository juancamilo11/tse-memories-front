import React from "react";
import { sweetalertForNoImageUploaded } from "../helpers/sweetAlertBuilder";
import ErrorFlag from "./ErrorFlag";
import FormMemoryImagesList from "./FormMemoryImagesList";

const MAX_NUM_PHOTOS = 10;
const NO_CONTENT_IMAGE =
  "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp";

const InputMemoryImagesForm = ({
  formValues,
  errorsState,
  handleInputValidation,
  handleSelectImageToLoad,
  memoryPhotoList,
  setMemoryPhotoList,
  resetForm,
}) => {
  const { memoryPhotoText, memoryPhotoImg, memoryPhotoDescription } =
    formValues;

  const cleanUpInputImageForm = () => {
    resetForm({
      ...formValues,
      memoryPhotoText: "",
      memoryPhotoDescription: "",
    });
    const imageComponent = document.getElementById("memory-image-preview");
    const anchorComponent = document.getElementById("memory-image-preview-url");
    imageComponent.setAttribute(
      "src",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
    );
    imageComponent.classList.replace(
      "memory-image-preview--with-content",
      "memory-image-preview--no-content"
    );
    anchorComponent.setAttribute("href", "#");
    anchorComponent.textContent = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlImage = document
      .getElementById("memory-image-preview-url")
      .getAttribute("href");

    if (urlImage.trim() === "#") {
      sweetalertForNoImageUploaded();
      return;
    }

    const newMemoryImage = {
      urlPhoto: urlImage,
      title: formValues.memoryPhotoText,
      description: formValues.memoryPhotoDescription,
    };
    setMemoryPhotoList((photoList) => [...photoList, newMemoryImage]);
    cleanUpInputImageForm();
  };

  return (
    <div className="memory-form__image-list-container">
      <h3 className="text-center">Ingreso de fotos para tu recuerdo</h3>
      <div className="memory-form__img-list-advice">
        {memoryPhotoList.length === 0 && (
          <ErrorFlag
            message="Aún no has ingresado imágenes para tu recuerdo, debes ingresar al menos una y máximo diez."
            color="blue"
          />
        )}
      </div>
      <form
        className="memory-form__input-image-container"
        onSubmit={handleSubmit}
      >
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
            disabled={memoryPhotoList.length >= MAX_NUM_PHOTOS}
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
            disabled={memoryPhotoList.length >= MAX_NUM_PHOTOS}
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
            disabled={memoryPhotoList.length >= MAX_NUM_PHOTOS}
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
      {memoryPhotoList.length >= MAX_NUM_PHOTOS && (
        <ErrorFlag
          message="Número máximo de fotos para tu recuerdo alcanzado"
          color="blue"
        />
      )}
      <label id="url-uploaded-img"></label>
      <div className="memory-form__error-flag mt-2 mb-4">
        {errorsState.memoryPhotoImg.hasErrors && (
          <ErrorFlag message={errorsState.memoryPhotoImg.message} color="red" />
        )}
        <h5 className="text-center">(Previsualización)</h5>
        <img
          src={NO_CONTENT_IMAGE}
          className="memory-image-preview--no-content"
          id="memory-image-preview"
          alt="previsualización de tu foto"
        />
        <a
          href="#"
          target="_blank"
          className="store-setup__url-image-label"
          id="memory-image-preview-url"
        ></a>
      </div>
      {memoryPhotoList.length > 0 && (
        <h3 className="memory-form__image-list-title text-center">
          Lista de imágenes de tu viaje
        </h3>
      )}
      <FormMemoryImagesList
        memoryPhotoList={memoryPhotoList}
        setMemoryPhotoList={setMemoryPhotoList}
      />
    </div>
  );
};

export default InputMemoryImagesForm;
