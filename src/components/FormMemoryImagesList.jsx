import React from "react";
import FormMemoryImage from "./FormMemoryImage";

const FormMemoryImagesList = ({ memoryPhotoList }) => {
  return (
    <div className="images-list__main-container">
      {memoryPhotoList.map((memoryImage) => (
        <FormMemoryImage {...memoryImage} />
      ))}
    </div>
  );
};

export default FormMemoryImagesList;
