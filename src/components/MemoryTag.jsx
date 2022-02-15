import React from "react";

const MemoryTag = ({ tag, setTagList }) => {
  const handleDeleteTag = (e) => {
    e.preventDefault();
    setTagList((tagList) => tagList.filter((theTag) => theTag !== tag));
  };

  return (
    <div className="memory-form__tag-container">
      <span className="memory-form__tag-name">{tag}</span>
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
