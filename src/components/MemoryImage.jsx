import React from "react";
import Swal from "sweetalert2";

const MemoryImage = ({ image, title }) => {
  const handleDisplayImage = (e) => {
    Swal.fire({
      title: `${title}`,
      imageUrl: `${image}`,
      imageHeight: 400,
      imageAlt: `${title}`,
      footer: `<a target="_blank" href=${image}>Ver en tamaño grande</a>`,
    });
  };

  return (
    <div className="memory-image__card-container" onClick={handleDisplayImage}>
      <img src={image} alt={title} className="memory-image__card-image" />

      <p className="memory-image__card-title text-center">
        Recuerdos de miami con toda mi familia{" "}
      </p>
    </div>
  );
};

export default MemoryImage;
