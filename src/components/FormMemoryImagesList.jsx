import React from "react";
import FormMemoryImage from "./FormMemoryImage";

const FormMemoryImagesList = ({ memoryPhotoList, setMemoryPhotoList }) => {
  return (
    <div className="images-list__main-container">
      {memoryPhotoList.map((memoryImage) => (
        <FormMemoryImage
          {...memoryImage}
          setMemoryPhotoList={setMemoryPhotoList}
        />
      ))}
    </div>
  );
};

export default FormMemoryImagesList;
