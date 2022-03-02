import React from "react";
import { useSelector } from "react-redux";
import MemoryActualizationForm from "./MemoryActualizationForm";
import MemorySearchPanel from "./MemorySearchPanel";
import MemoryView from "./MemoryView";
import NoMemorySelected from "./NoMemorySelected";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const { memories } = useSelector((state) => state);

  return (
    <div className="memory-catalog__main-content">
      <Sidebar />
      {memories.activeMemoryToShow && <MemoryView />}
      {memories.activeMemoryToUpdate && <MemoryActualizationForm />}
      {memories.activeSearchPanel && <MemorySearchPanel />}
      {memories.activeEmptyFormForNewMemory && <MemoryActualizationForm />}

      {!memories.activeMemoryToShow &&
        !memories.activeMemoryToUpdate &&
        !memories.activeSearchPanel &&
        !memories.activeEmptyFormForNewMemory && <NoMemorySelected />}
    </div>
  );
};

export default HomePage;
