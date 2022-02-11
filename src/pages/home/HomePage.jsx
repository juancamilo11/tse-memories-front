import React from "react";
import { useSelector } from "react-redux";
import MemoryView from "./MemoryView";
import NoMemorySelected from "./NoMemorySelected";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const { memories } = useSelector((state) => state);

  return (
    <div className="memory-catalog__main-content">
      <Sidebar />
      {memories.active ? <MemoryView /> : <NoMemorySelected />}
    </div>
  );
};

export default HomePage;
