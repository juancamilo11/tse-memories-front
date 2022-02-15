import React from "react";
import Swal from "sweetalert2";

const MemoryImage = ({ urlPhoto, title, description }) => {
  const handleDisplayImage = (e) => {
    Swal.fire({
      title: `${title}`,
      imageUrl: `${urlPhoto}`,
      imageHeight: 400,
      imageAlt: `${title}`,
      text: `${description}`,
      footer: `<a target="_blank" href=${urlPhoto}>Ver en tamaño grande</a>`,
    });
  };

  return (
    <div className="memory-image__card-container" onClick={handleDisplayImage}>
      <img src={urlPhoto} alt={title} className="memory-image__card-image" />

      <p className="memory-image__card-title text-center">
        Recuerdos de miami con toda mi familia{" "}
      </p>
    </div>
  );
};

export default MemoryImage;
