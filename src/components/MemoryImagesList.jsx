import React from "react";
import MemoryImage from "./MemoryImage";

const MemoryImagesList = ({ memoryImages }) => {
  return (
    <div className="images-list__main-container">
      {memoryImages.map((memoryImage) => (
        <MemoryImage
          key={
            memoryImage.urlPhoto +
            "" +
            memoryImage.title +
            "" +
            memoryImage.description
          }
          {...memoryImage}
        />
      ))}
    </div>
  );
};

export default MemoryImagesList;
