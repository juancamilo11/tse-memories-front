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
    <div
      className="memory-image__card-container"
      onClick={handleDisplayImage}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${
          urlPhoto ||
          "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp"
        })`,
      }}
    >
      <p className="memory-image__card-title text-center">
        {title || "Sin título"}
      </p>
    </div>
  );
};

export default MemoryImage;
