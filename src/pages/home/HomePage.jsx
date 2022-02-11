import React from "react";
import MemoryView from "./MemoryView";
import NoMemorySelected from "./NoMemorySelected";

const HomePage = () => {
  const { memories } = useSelector((state) => state);

  return (
    <div className="store-catalog__main-content">
      <Sidebar />
      {memories.active ? <MemoryView /> : <NoMemorySelected />}
    </div>
  );
};

export default HomePage;
