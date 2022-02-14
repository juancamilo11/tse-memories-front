import React from "react";
import MemoryImage from "./MemoryImage";

const imagesListFakeData = [
  {
    title: "Recuerdos de Miami",
    image:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
  },
  {
    title: "Recuerdos de Miami",
    image:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
  },
  {
    title: "Recuerdos de Miami",
    image:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
  },
  {
    title: "Recuerdos de Miami",
    image:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
  },
];

const MemoryImagesList = ({ memoryImages }) => {
  return (
    <div className="images-list__main-container">
      {/* {memoryImages.map((memoryImage, index) => ( */}
      {imagesListFakeData.map((memoryImage, index) => (
        <MemoryImage key={index} {...memoryImage} />
      ))}
    </div>
  );
};

export default MemoryImagesList;
