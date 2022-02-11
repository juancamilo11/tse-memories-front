import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCatalogMemoriesFakeData } from "../../helpers/catalogMemoriesFakeData";
import MemoryEntries from "./MemoryEntries";

const Sidebar = () => {
  const navigate = useNavigate();

  //const { memories } = useSelector((state) => state);
  //Aquí es donde se llevan a cabo los procesos de filtrado y búsqueda y ordenamiento
  const [memories, setMemories] = useState(getCatalogMemoriesFakeData);

  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const { auth } = useSelector((state) => state);
  return (
    <aside className="memory-catalog__sidebar">
      <div className="memory-catalog__sidebar-navbar">
        <div className="memory-catalog__sidebar-user-info">
          {auth?.photoUrl ? (
            <img
              src={auth.photoUrl}
              alt="profile picture"
              className="memory-catalog__img-profile"
            />
          ) : (
            <i className="fas fa fa-user-circle memory-catalog__logo-profile"></i>
          )}
          <span className="memory-catalog__display-name"> {auth.name}</span>
        </div>
        <button
          className="memory-catalog__search-button"
          onClick={handleSearch}
        >
          Buscar y filtrar
        </button>
      </div>

      <MemoryEntries memories={memories} />
    </aside>
  );
};

export default Sidebar;
