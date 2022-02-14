import React from "react";
import PrivateMemoryEntry from "./memoryEntryTypes/PrivateMemoryEntry";
import ProtectedMemoryEntry from "./memoryEntryTypes/ProtectedMemoryEntry";
import PublicMemoryEntry from "./memoryEntryTypes/PublicMemoryEntry";
import NewMemoryEntry from "./NewMemoryEntry";

const MemoryEntries = ({ memories }) => {
  //Obtener los recuerdos propios, ponerlos de primero
  //Luego con los recuerdos propios, colocar primero los
  //públicos, luego los protegidos y luego los privados

  //Luego colocar los protegidos compartidos con uno, y finalmente los públicos
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
};

export default MemoryEntries;
