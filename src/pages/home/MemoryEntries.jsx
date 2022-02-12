import React from "react";
import PrivateMemoryEntry from "./memoryEntryTypes/PrivateMemoryEntry";
import ProtectedMemoryEntry from "./memoryEntryTypes/ProtectedMemoryEntry";
import PublicMemoryEntry from "./memoryEntryTypes/PublicMemoryEntry";

const MemoryEntries = ({ memories }) => {
  return (
    <div className="memory-catalog__entries">
      {memories.memoriesList.map((memory) => {
        switch (memory.visibility) {
          case "PUBLIC":
            return <PublicMemoryEntry key={memory.id} {...memory} />;
          case "PROTECTED":
            return <ProtectedMemoryEntry key={memory.id} {...memory} />;
          case "PRIVATE":
            return <PrivateMemoryEntry key={memory.id} {...memory} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default MemoryEntries;
