import React from "react";
import MemoryImage from "./MemoryImage";

const MemoryImagesList = ({ memoryImages }) => {
  return (
    <div className="images-list__main-container">
      {memoryImages.map((memoryImage, index) => (
        <MemoryImage key={index} {...memoryImage} />
      ))}
    </div>
  );
};

export default MemoryImagesList;
