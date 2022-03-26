import React from "react";
import PrivateMemoryEntry from "./memoryEntryTypes/PrivateMemoryEntry";
import ProtectedMemoryEntry from "./memoryEntryTypes/ProtectedMemoryEntry";
import PublicMemoryEntry from "./memoryEntryTypes/PublicMemoryEntry";
import NewMemoryEntry from "./NewMemoryEntry";

const MemoryEntries = ({ memories }) => {
  if (memories.memoriesList.length == 0) {
    return (
      <div>
        <NewMemoryEntry />
        <div className="memory-catalog__empty-entries-container">
          <h3 className="text-center">No hay recuerdos para mostrar</h3>
          <h5 className="text-center">
            Click en el botón de arriba para crear uno nuevo
          </h5>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/img/loader/no-memories-img.svg"
            }
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
        {memories.memoriesList.map((memory) => {
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
