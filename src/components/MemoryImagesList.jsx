import React from "react";
import MemoryImage from "./MemoryImage";

const imagesListFakeData = [
  {
    title: "Recuerdos de Miami",
    urlPhoto:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Recuerdos de Miami",
    urlPhoto:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Recuerdos de Miami",
    urlPhoto:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Recuerdos de Miami",
    urlPhoto:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1644706887/tse_memories/assets/no-content-image.webp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
