import React from "react";

const MemoryImage = ({ image, title }) => {
  return (
    <div className="memory-image__card-container">
      <img src={image} alt={title} className="memory-image__card-image" />

      <p className="memory-image__card-title text-center">
        Recuerdos de miami con toda mi familia{" "}
      </p>
    </div>
  );
};

export default MemoryImage;
