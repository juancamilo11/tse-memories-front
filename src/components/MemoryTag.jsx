import React from "react";

const MemoryTag = ({ tag, setFormValues }) => {
  const handleDeleteTag = (e) => {
    e.preventDefault();
    // setFormValues()
  };

  return (
    <div>
      <span className="store-setup__tag-name mb-2">{tag}</span>
      <button
        className="btn btn-danger btn-delete-tag"
        onClick={handleDeleteTag}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default MemoryTag;
