import React from "react";
import Swal from "sweetalert2";

const FormMemoryImage = ({
  urlPhoto,
  title,
  description,
  setMemoryPhotoList,
}) => {
  const handleDeleteImage = (e) => {
    e.preventDefault();
    setMemoryPhotoList((memoryPhotoList) =>
      memoryPhotoList.filter(
        (memoryPhoto) =>
          memoryPhoto.urlPhoto !== urlPhoto &&
          memoryPhoto.title !== title &&
          memoryPhoto.description !== description
      )
    );
  };

  const handleDisplayImage = (e) => {
    Swal.fire({
      title: `${title}`,
      imageUrl: `${urlPhoto}`,
      imageHeight: 400,
      imageAlt: `${title}`,
      text: `${description || "Sin descripción"}`,
      footer: `<a target="_blank" href=${urlPhoto}>Ver en tamaño grande</a>`,
    });
  };

  return (
    <div className="memory-image__card-container" onClick={handleDisplayImage}>
      <img src={urlPhoto} alt={title} className="memory-image__card-image" />

      <p className="memory-image__card-title text-center">
        {title || "Sin título"}
      </p>
      <button
        className="memory-image__delete-img-button"
        onClick={handleDeleteImage}
      >
        <i className="fas fa-trash-alt "></i>
      </button>
    </div>
  );
};

export default FormMemoryImage;
