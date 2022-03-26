import React from "react";
import { useDispatch } from "react-redux";
import { activeNewMemory } from "../../actions/memoryActions";

const NewMemoryEntry = () => {
  const dispatch = useDispatch();

  const handleOpenEmptyFormForNewMemory = (e) => {
    e.preventDefault();
    dispatch(activeNewMemory());
  };

  return (
    <div className="store-catalog__new-memory-container">
      <button
        className="store-catalog__new-memory-button"
        onClick={handleOpenEmptyFormForNewMemory}
      >
        <img
          className="store-catalog__new-memory-img"
          src={process.env.PUBLIC_URL + "/assets/img/home/travel.png"}
          alt="new memory button"
        />
        <p className="store-catalog__new-memory-text">Nuevo Recuerdo</p>
      </button>
    </div>
  );
};

export default NewMemoryEntry;
