import React from "react";
import MemoryEntry from "./MemoryEntry";

const MemoryEntries = ({ memories }) => {
  return (
    <div className="memory-catalog__entries">
      {memories.memoriesList.map((memory) => {
        switch (memory.visibility) {
          case "PUBLIC":
            <PublicMemoryEntry key={memory.id} {...memory} />;

            break;
          case "PUBLIC":
            <PublicMemoryEntry key={memory.id} {...memory} />;

            break;
          case "PUBLIC":
            <PublicMemoryEntry key={memory.id} {...memory} />;

            break;
          default:
            break;
        }
      })}
    </div>
  );
};

export default MemoryEntries;
