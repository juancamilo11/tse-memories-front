import React from "react";
import PrivateMemoryEntry from "./memoryEntryTypes/PrivateMemoryEntry";
import ProtectedMemoryEntry from "./memoryEntryTypes/ProtectedMemoryEntry";
import PublicMemoryEntry from "./memoryEntryTypes/PublicMemoryEntry";
import NewMemoryEntry from "./NewMemoryEntry";

const MemoryEntries = ({ memories }) => {
  //Obtener los recuerdos propios, ponerlos de primero
  //Luego con los recuerdos propios, colocar primero los
  //públicos, luego los protegidos y luego los privados --> Ordenando c/u de estos grupos por la fecha de ocurrencia del recuerdo

  //Luego colocar los protegidos compartidos con uno, y finalmente los públicos

  if (false) {
    return (
      <div>
        <NewMemoryEntry />
        <div className="memory-catalog__empty-entries-container">
          <h3 className="text-center">No hay recuerdos para mostrar</h3>
          <h5 className="text-center">
            Click en el botón de arriba para crear uno nuevo
          </h5>
          <img
            src="https://res.cloudinary.com/dahwtwzdl/image/upload/v1644987440/tse_memories/assets/error-404_1_ari8i1.png"
            alt="No results found"
            className="memory-catalog__empty-entries-img"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="memory-catalog__entries">
        <NewMemoryEntry />
        {memories.memoriesList
          // .sort((firstElement, secondElement) => {
          //   return firstElement.creationDate - secondElement.creationDate;
          // })
          .map((memory) => {
            switch (memory.visibility) {
              case "publico":
                return <PublicMemoryEntry key={memory.id} {...memory} />;
              case "protegido":
                return <ProtectedMemoryEntry key={memory.id} {...memory} />;
              case "privado":
                return <PrivateMemoryEntry key={memory.id} {...memory} />;
              default:
                break;
            }
          })}
      </div>
    );
  }
};

export default MemoryEntries;
