import React from "react";

const NewMemoryEntry = () => {
  return (
    <div className="store-catalog__new-memory-container">
      <button className="store-catalog__new-memory-button">
        <img
          className="store-catalog__new-memory-img"
          src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1644700208/tse_memories/assets/travel_hotnua.png"
          alt="new memory button"
        />
        <p className="store-catalog__new-memory-text">Nuevo Recuerdo</p>
      </button>
    </div>
  );
};

export default NewMemoryEntry;
