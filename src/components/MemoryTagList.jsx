import React from "react";
import ErrorFlag from "./ErrorFlag";
import MemoryTag from "./MemoryTag";

const MemoryTagList = ({ tagList, setTagList }) => {
  return (
    <div className="memory-form__tag-list-container">
      <h3 className="memory-form__tag-list-title text-center">
        Lista de palabras claves (Etiquetas) de tu viaje
      </h3>

      <div className="memory-form__left-counting-tags">
        {tagList.length === 0 && (
          <ErrorFlag
            message="Aún no has ingresado palabras claves de tu viaje."
            color="blue"
          />
        )}

        {tagList.length > 0 && tagList.length < 25 && (
          <ErrorFlag
            message="Puedes tener hasta 25 etiquetas no repetidas para recuerdo de viaje"
            color="blue"
            fontColor="white"
          />
        )}

        {tagList.length === 25 && (
          <ErrorFlag
            message="Número máximo de etiquetas para este recuerdo alcanzado."
            color="blue"
          />
        )}
      </div>
      <div className="memory-form__tag-list">
        {tagList.map((tag) => (
          <MemoryTag id={tag} tag={tag} setTagList={setTagList} />
        ))}
      </div>
    </div>
  );
};

export default MemoryTagList;
