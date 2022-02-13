import React from "react";
import MemoryTag from "./MemoryTag";

const MemoryTagList = ({ tagList, setFormValues }) => {
  return (
    <div className="memory-form__tag-list-container">
      <h3 className="memory-form__tag-list-title text-center">
        Lista de palabras claves (Etiquetas) de tu viaje
      </h3>

      <div className="store-setup__left-counting-tags">
        {tagList.length > 0 && tagList.length < 10 && (
          <div className="alert alert-primary text-center mt-3">
            Debes tener entre <b>tres</b> y <b>diez</b> etiquetas para cada
            producto, aún puedes ingresar {10 - tagList.length} etiquetas
            (Máximo diez).
          </div>
        )}
      </div>
      <div className="store-setup__left-counting-tags">
        {tagList.length === 10 && (
          <div className="alert alert-primary text-center mt-3">
            Número máximo de etiquetas para este producto alcanzado.
          </div>
        )}
      </div>

      <div className="memory-form__tag-list">
        {tagList.map((tag, index) => (
          //Crear el componente tag con el ícono de la basura
          <MemoryTag id={index} tag={tag} setFormValues={setFormValues} />
        ))}
      </div>
    </div>
  );
};

export default MemoryTagList;
